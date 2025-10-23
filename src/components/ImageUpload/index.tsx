'use client';

import { useRef, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { ImageKitProvider, upload } from '@imagekit/next';
import config from '@/lib/config';

// const authenticator = async () => {
//   try {
//     const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(
//         `Request failed with status ${response.status}: ${errorText}`
//       );
//     }
//
//     const data = await response.json();
//     const { signature, token, expire } = data;
//
//     return { signature, token, expire };
//   } catch (error: any) {
//     throw new Error(`Authentication request failed: ${error.message}`);
//   }
// };

const {
  env: {
    imagekit: { publicKey, urlEndpoint }
  }
} = config;

interface Props {
  onFileChange: (file: string | null) => void;
}

const ImageUpload = ({ onFileChange }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // const { signature, token, expire } = await authenticator();
      const authRes = await fetch('/api/auth/imagekit');
      if (!authRes.ok) throw new Error('Failed to fetch auth parameters');
      const { signature, token, expire } = await authRes.json();

      const result = await upload({
        file,
        fileName: file.name,
        publicKey,
        signature,
        token,
        expire,
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        }
      });

      //resul.url - full path with domain
      //result.filePath - only filePath
      if (result.filePath && result.url) {
        setFilePath(result.filePath);
        // onFileChange({ filePath: result.filePath });
        onFileChange(result.url);

        toast.success('Image uploaded successfully');
      } else {
        throw new Error('Upload succeeded but no URL was returned');
      }
    } catch (error) {
      console.error('Upload Error:', error);
      toast.warning('Image upload failed, please try again');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
      <button type="button" onClick={triggerFileInput} className="upload_btn">
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-white/80 mx-1">Upload a File</p>
        {filePath && <p className="uploaded-filename">{filePath}</p>}
      </button>
      {progress > 0 && progress < 100 && (
        <div className="flex items-center justify-center gap-2">
          Upload progress: <progress value={progress} max={100}></progress>
        </div>
      )}
      {filePath && (
        <Image
          src={`${urlEndpoint}/${filePath}`}
          alt="Uploaded Image"
          width={300}
          height={100}
          className="mt-4"
        />
      )}
    </ImageKitProvider>
  );
};
export default ImageUpload;

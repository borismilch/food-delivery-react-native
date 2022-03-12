import React from 'react'

import { useState, useRef } from 'react'
import { storage } from '../lib/firebase'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'

const useUploadData = (path: string = 'posts/images/', ext: string = '') => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [dataUrl, setDataUrl] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const cleanImage = () => {
    setUrl('')
    setDataUrl('')
  }
  
  const getUploadedData = async (data_url: string) => {
    setDataUrl(data_url)

    try {
     await UploadFile(data_url)

    } catch (e) { setError(e as any) }

  }

  const UploadFile =  async (dataUrl: string) => {
    setLoading(true)

    console.log(dataUrl, "step 1")

    const fileRef = ref(storage, path + (Math.random().toString(36).substring(2, 12) + Date.now().toString()) + ext)
    await uploadString(fileRef, dataUrl, 'base64')

    const url = await getDownloadURL(fileRef)

    console.log("step 2", url)

    setUrl(url)
    setLoading(false)
  }

  return {dataUrl, url, getUploadedData, loading, error, fileInputRef, cleanImage}
}

export default useUploadData
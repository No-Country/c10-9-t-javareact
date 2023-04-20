import React, { useState, useRef } from 'react'
import '../styles/UserProfile.css'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { createCanvas } from 'canvas'

function UserProfile () {
  const [profilePicture, setProfilePicture] = useState(null)
  const [crop, setCrop] = useState({ aspect: 1, unit: 'px', width: 100, height: 100 })
  const fileInputRef = useRef(null)

  const handlePictureUpload = () => {
    const file = fileInputRef.current.files[0]
    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.onload = () => {
      setProfilePicture(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleCropChange = (crop) => {
    setCrop(crop)
  }

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    // eslint-disable-next-line no-undef
    const image = new Image()
    image.onload = () => {
      const canvas = createCanvas(croppedAreaPixels.width, croppedAreaPixels.height)
      const ctx = canvas.getContext('2d')
      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      )
      setProfilePicture(canvas.toDataURL('image/jpeg'))
    }
    image.src = profilePicture
  }

  return (
    <div className='profile-picture'>
      {profilePicture
        ? (
          <ReactCrop src={profilePicture} crop={crop} onChange={handleCropChange} onComplete={handleCropComplete} />
          )
        : (
          <img src='/default-profile-picture.png' alt='Profile' />
          )}
      <input type='file' onChange={handlePictureUpload} accept='image/*' ref={fileInputRef} />
    </div>
  )
}

export default UserProfile

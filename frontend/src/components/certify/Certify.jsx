import React, { useState, useRef } from 'react'
import './Certify.css'
import { FaBarcode, FaBuilding, FaSearch, FaQrcode, FaCamera, FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa'

const Certify = () => {
  const [verifyData, setVerifyData] = useState({
    productId: '',
    companyName: ''
  })
  const [showScanner, setShowScanner] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)
  const videoRef = useRef(null)

  const handleVerifyChange = (e) => {
    const { name, value } = e.target
    setVerifyData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleVerify = (e) => {
    e.preventDefault()
    // Simulate verification process
    setVerificationResult({
      status: 'success', // or 'error' or 'pending'
      productId: verifyData.productId,
      companyName: verifyData.companyName,
      certificationDate: '2024-03-15',
      expiryDate: '2025-03-15',
      certificateType: 'Sustainability Certification',
      details: 'This product has been verified and certified for sustainable manufacturing practices.'
    })
  }

  const toggleScanner = () => {
    setShowScanner(!showScanner)
  }

  return (
    <div className="certify-container">
      <div className="certify-wrapper">
        <div className="certify-header">
          <h1>Verify <span className="highlight">Product</span></h1>
          <p>Verify your product's authenticity and certification status using blockchain technology</p>
        </div>

        <div className="certify-form">
          <form onSubmit={handleVerify}>
            <div className="form-grid">
              <div className="form-group">
                <div className="input-group">
                  <FaBarcode className="input-icon" />
                  <input
                    type="text"
                    name="productId"
                    value={verifyData.productId}
                    onChange={handleVerifyChange}
                    placeholder="Enter Product ID"
                    required
                  />
                  <button 
                    type="button" 
                    className="scan-btn"
                    onClick={toggleScanner}
                  >
                    <FaQrcode className="scan-icon" />
                  </button>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaBuilding className="input-icon" />
                  <input
                    type="text"
                    name="companyName"
                    value={verifyData.companyName}
                    onChange={handleVerifyChange}
                    placeholder="Enter Company Name"
                    required
                  />
                </div>
              </div>
            </div>

            {showScanner && (
              <div className="scanner-container">
                <div className="scanner-overlay">
                  <div className="scanner-frame">
                    <FaCamera className="scanner-icon" />
                    <p>Position QR code within frame</p>
                  </div>
                </div>
                <video 
                  ref={videoRef}
                  className="scanner-video"
                  autoPlay
                  playsInline
                />
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                <FaSearch className="btn-icon" />
                Verify Product
                <span className="btn-shine"></span>
              </button>
            </div>
          </form>

          {verificationResult && (
            <div className={`verification-result ${verificationResult.status}`}>
              <div className="result-header">
                {verificationResult.status === 'success' ? (
                  <FaCheckCircle className="result-icon success" />
                ) : verificationResult.status === 'error' ? (
                  <FaTimesCircle className="result-icon error" />
                ) : (
                  <FaInfoCircle className="result-icon pending" />
                )}
                <h3>Verification Result</h3>
              </div>
              
              <div className="result-details">
                <div className="detail-item">
                  <span className="detail-label">Product ID:</span>
                  <span className="detail-value">{verificationResult.productId}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">{verificationResult.companyName}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Certification Date:</span>
                  <span className="detail-value">{verificationResult.certificationDate}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Expiry Date:</span>
                  <span className="detail-value">{verificationResult.expiryDate}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Certificate Type:</span>
                  <span className="detail-value">{verificationResult.certificateType}</span>
                </div>
                <div className="detail-item full-width">
                  <span className="detail-label">Details:</span>
                  <span className="detail-value">{verificationResult.details}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Certify

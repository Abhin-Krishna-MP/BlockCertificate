import React, { useState } from 'react'
import './Companyver.css'
import { useNavigate } from 'react-router-dom'
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa'

const CompanyVer = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    navigate('/productver')
  }

  return (
    <div className="company-ver-container">
      <div className="company-ver-wrapper">
        <div className="company-ver-header">
          <h1>Company Verification</h1>
          <p>Please provide your company details for verification</p>
        </div>

        <div className="company-ver-form">
          <form onSubmit={handleSubmit}>
            <div className="company-ver-grid">
              <div className="company-ver-group">
                <div className="company-ver-group">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                  />
                </div>
              </div>

              <div className="company-ver-group">
                <div className="company-ver-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="company-ver-group">
                <div className="company-ver-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="company-ver-group full-width">
                <div className="company-ver-group">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Company Address"
                    required
                  />
                </div>
              </div>

              <div className="company-ver-group full-width">
                <div className="company-ver-group">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Company Description"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button onClick={() => navigate('/productver')} type="submit" className="submit-btn">
                Submit Verification
                <span className="btn-shine"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CompanyVer
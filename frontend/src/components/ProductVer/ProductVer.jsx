import React, { useState } from 'react'
import './ProductVer.css'
import { FaLeaf, FaSun, FaCloud, FaWater, FaFileUpload, FaInfoCircle } from 'react-icons/fa'

const ProductVer = () => {
    // Application form states
    const [formData, setFormData] = useState({
        // Product Details
        productName: '',
        productId: '',
        description: '',
        productionDate: '',
        
        // Sustainability Metrics
        sustainableMaterials: '',
        renewableEnergy: '',
        carbonFootprint: '',
        waterUsage: '',
        
        // Documents
        sustainabilityReport: null,
        auditCertificate: null,
        complianceDocuments: null,
        
        // Declaration
        declarationAccepted: false
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormChange = (e) => {
        const { name, value, type, checked, files } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }))
    }

    const validateForm = () => {
        const errors = {}
        // Add validation logic here
        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errors = validateForm()
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }

        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        // Handle successful submission
    }

    return (
        <div className="product-ver-container">
            <div className="application-form">
                <div className="verification-header">
                    <h1>Apply for Product Verification</h1>
                    <p>Submit your product for sustainability certification</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Product Details Section */}
                    <section className="form-section">
                        <h2>Product Details</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleFormChange}
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Product ID</label>
                                <input
                                    type="text"
                                    name="productId"
                                    value={formData.productId}
                                    onChange={handleFormChange}
                                    placeholder="Enter or generate product ID"
                                    required
                                />
                            </div>
                            <div className="form-group full-width">
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    placeholder="Describe your product and its sustainable features"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Production Date</label>
                                <input
                                    type="date"
                                    name="productionDate"
                                    value={formData.productionDate}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Sustainability Metrics Section */}
                    <section className="form-section">
                        <h2>Sustainability Metrics</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>
                                    <FaLeaf className="metric-icon" />
                                    Sustainable Materials (%)
                                </label>
                                <input
                                    type="number"
                                    name="sustainableMaterials"
                                    value={formData.sustainableMaterials}
                                    onChange={handleFormChange}
                                    min="0"
                                    max="100"
                                    placeholder="0-100"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <FaSun className="metric-icon" />
                                    Renewable Energy (%)
                                </label>
                                <input
                                    type="number"
                                    name="renewableEnergy"
                                    value={formData.renewableEnergy}
                                    onChange={handleFormChange}
                                    min="0"
                                    max="100"
                                    placeholder="0-100"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <FaCloud className="metric-icon" />
                                    Carbon Footprint (tons CO2)
                                </label>
                                <input
                                    type="number"
                                    name="carbonFootprint"
                                    value={formData.carbonFootprint}
                                    onChange={handleFormChange}
                                    min="0"
                                    step="0.1"
                                    placeholder="Enter value"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <FaWater className="metric-icon" />
                                    Water Usage (liters)
                                </label>
                                <input
                                    type="number"
                                    name="waterUsage"
                                    value={formData.waterUsage}
                                    onChange={handleFormChange}
                                    min="0"
                                    placeholder="Enter value"
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Supporting Documentation Section */}
                    <section className="form-section">
                        <h2>Supporting Documentation</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>
                                    <FaFileUpload className="upload-icon" />
                                    Sustainability Report
                                </label>
                                <input
                                    type="file"
                                    name="sustainabilityReport"
                                    onChange={handleFormChange}
                                    accept=".pdf"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <FaFileUpload className="upload-icon" />
                                    Audit Certificate
                                </label>
                                <input
                                    type="file"
                                    name="auditCertificate"
                                    onChange={handleFormChange}
                                    accept=".pdf"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <FaFileUpload className="upload-icon" />
                                    Compliance Documents
                                </label>
                                <input
                                    type="file"
                                    name="complianceDocuments"
                                    onChange={handleFormChange}
                                    accept=".pdf"
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Smart Contract Info */}
                    <div className="smart-contract-info">
                        <FaInfoCircle className="info-icon" />
                        <h3>Smart Contract Verification Criteria</h3>
                        <ul>
                            <li>Minimum 70% sustainable/recycled materials</li>
                            <li>At least 50% renewable energy usage</li>
                            <li>Carbon footprint below industry average</li>
                        </ul>
                    </div>

                    {/* Declaration */}
                    <div className="declaration-section">
                        <label className="declaration-checkbox">
                            <input
                                type="checkbox"
                                name="declarationAccepted"
                                checked={formData.declarationAccepted}
                                onChange={handleFormChange}
                                required
                            />
                            <span>
                                I confirm that all information provided is accurate and complete. 
                                I understand that this data will be processed and stored on the blockchain 
                                for verification purposes.
                            </span>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="verify-details-btn"
                            onClick={() => {
                                const errors = validateForm()
                                setFormErrors(errors)
                            }}
                        >
                            Verify Details
                        </button>
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductVer 
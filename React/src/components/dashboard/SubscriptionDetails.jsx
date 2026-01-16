import React from 'react';
import { Icon } from '@iconify/react';

const SubscriptionDetails = () => {
    return (
        <div className="card h-100 border-0 shadow-sm overflow-hidden">
            <div className="card-header bg-primary bg-gradient p-4 position-relative overflow-hidden">
                <div className="position-relative z-1 text-center">
                    <h5 className="text-white mb-1 opacity-75 text-uppercase fs-12 ls-1">Current Plan</h5>
                    <h3 className="text-white mb-0 fw-bold">Standard Plan</h3>
                </div>
                {/* Decorative Icon Background */}
                <Icon
                    icon="solar:crown-star-bold-duotone"
                    className="position-absolute text-white opacity-10"
                    style={{ right: '-20px', top: '-10px', fontSize: '120px', transform: 'rotate(15deg)' }}
                />
            </div>

            <div className="card-body p-4">
                <div className="d-flex flex-column gap-4">
                    {/* Expiry Date */}
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0 bg-danger-subtle rounded-3 d-flex align-items-center justify-content-center me-3">
                            <Icon icon="solar:calendar-date-bold-duotone" className="text-danger fs-20" />
                        </div>
                        <div className="flex-grow-1">
                            <p className="text-muted fs-13 mb-0 text-uppercase fw-medium">Expiry Date</p>
                            <h5 className="mb-0 fs-16 fw-semibold">Oct 24, 2026</h5>
                        </div>
                        <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded-2 fs-11">
                            320 Days Left
                        </span>
                    </div>

                    {/* License Key */}
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0 bg-warning-subtle rounded-3 d-flex align-items-center justify-content-center me-3">
                            <Icon icon="solar:key-minimalistic-square-3-bold-duotone" className="text-warning fs-20" />
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-muted fs-13 mb-0 text-uppercase fw-medium">License Key</p>
                            <div className="d-flex align-items-center">
                                <code className="text-body fw-bold fs-14 text-truncate me-2 bg-transparent p-0">
                                    FCX-8859-2201-9988
                                </code>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-icon btn-soft-secondary rounded-circle" title="Copy Key">
                            <Icon icon="solar:copy-bold-duotone" className="fs-16" />
                        </button>
                    </div>

                    {/* Transfer Limit */}
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0 bg-success-subtle rounded-3 d-flex align-items-center justify-content-center me-3">
                            <Icon icon="solar:wallet-money-bold-duotone" className="text-success fs-20" />
                        </div>
                        <div className="flex-grow-1">
                            <p className="text-muted fs-13 mb-0 text-uppercase fw-medium">Min Transfer</p>
                            <h5 className="mb-0 fs-16 fw-semibold">$100.00</h5>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-3 border-top">
                    <button className="btn btn-primary w-100 fw-medium shadow-sm">
                        Upgrade Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionDetails;

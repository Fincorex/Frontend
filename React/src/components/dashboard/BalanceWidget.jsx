import React from 'react';
import { Icon } from '@iconify/react';

const BalanceWidget = ({ title, balance, details, icon, color = 'primary' }) => {
    return (
        <div className="card border-0 shadow-none h-100 mb-0" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
            <div className="card-body p-3">
                <div className="d-flex align-items-center mb-3">
                    <div className={`avatar avatar-xs flex-shrink-0 bg-${color}-subtle rounded-circle d-flex align-items-center justify-content-center me-2`}>
                        <Icon icon={icon} className={`text-${color} fs-16`} />
                    </div>
                    <p className="text-uppercase mb-0 fs-12 text-muted fw-bold ls-05 text-truncate">{title}</p>
                </div>

                <h4 className="mb-2 fw-bold fs-18">{balance}</h4>
                <p className="mb-0 fs-12 text-muted lh-base">{details}</p>
            </div>
        </div>
    );
};

export default BalanceWidget;

import React from 'react';

const StatsCard = ({ icon, title, value, change, changeType }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <div dangerouslySetInnerHTML={{ __html: icon }} className="me-2" />
                    <p className="mb-0 fs-15 fw-medium text-truncate">{title}</p>
                </div>

                <div className="d-flex align-items-center mb-2">
                    <h3 className="fs-24 mb-0 fw-semibold me-3 me-xxl-2">{value}</h3>
                    <span className={`badge badge-custom-second fw-semibold text-${changeType} rounded-2 fs-14`}>
                        + {change}%
                    </span>
                </div>

                <p className="text-muted fs-14 mb-3 text-truncate">Compared to last month</p>

                <a className="btn py-1 border bg-body-secondary fw-medium d-flex align-items-center justify-content-between text-capitalize rounded-3 fs-13">
                    View Details
                    <i className="mdi mdi-arrow-right ms-2 fs-17"></i>
                </a>
            </div>
        </div>
    );
};

export default StatsCard;

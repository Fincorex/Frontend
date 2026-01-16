import React from 'react';

const UpgradeCard = () => {
    return (
        <div className="card bg-primary overflow-hidden">
            <div className="card-body position-relative">
                <div className="d-flex align-content-center justify-content-between">
                    <div className="d-flex align-items-start flex-column">
                        <h3 className="text-white fw-medium fs-20 lh-base">
                            Upgrade you plan for <br />Great experience
                        </h3>
                        <p className="mb-3 text-white">Unlock powerful sales insights and Boost you performance.</p>
                        <a href="#" className="btn btn-sm btn-danger mt-auto">Upgarde Now</a>
                    </div>

                    <div className="justify-content-center d-none d-md-inline d-xl-none d-xxl-inline">
                        <img src="/src/assets/images/widget/girls-01.png" alt="image-data" className="mb-n3 float-end" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradeCard;

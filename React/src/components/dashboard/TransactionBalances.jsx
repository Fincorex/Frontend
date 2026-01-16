import React from 'react';
import BalanceWidget from './BalanceWidget';
import { Icon } from '@iconify/react';

const TransactionBalances = () => {
    return (
        <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-transparent border-bottom py-3">
                <div className="d-flex align-items-center gap-2">
                    <div className="avatar avatar-xs bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center">
                        <Icon icon="solar:wallet-2-bold-duotone" className="text-primary fs-16" />
                    </div>
                    <h5 className="card-title mb-0 fw-bold">Transaction Balances</h5>
                </div>
            </div>
            <div className="card-body p-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Sms Balance"
                            balance="4,500 Units"
                            details="Remaining SMS credits for alerts."
                            icon="solar:chat-round-unread-bold-duotone"
                            color="info"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Verification Balance"
                            balance="$1,250.00"
                            details="Funds reserved for verification APIs."
                            icon="solar:verified-check-bold-duotone"
                            color="success"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Inward Transfer"
                            balance="$45,200.50"
                            details="Total received from external accounts."
                            icon="solar:arrow-left-down-bold-duotone"
                            color="primary"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Outward Transfer"
                            balance="$12,800.00"
                            details="Total sent to external bank accounts."
                            icon="solar:arrow-right-up-bold-duotone"
                            color="warning"
                        />
                    </div>

                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="General Balance"
                            balance="$28,950.00"
                            details="Main operational account balance."
                            icon="solar:wallet-bold-duotone"
                            color="primary"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Bills Balance"
                            balance="$3,400.00"
                            details="Reserved for recurring bill payments."
                            icon="solar:bill-list-bold-duotone"
                            color="danger"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Card Balance"
                            balance="$8,750.00"
                            details="Aggregate balance on issued cards."
                            icon="solar:card-bold-duotone"
                            color="info" // Custom color class needs to be checked or use standard
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <BalanceWidget
                            title="Ussd Balance"
                            balance="$560.00"
                            details="Funds for USSD service charges."
                            icon="solar:smartphone-bold-duotone"
                            color="secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionBalances;

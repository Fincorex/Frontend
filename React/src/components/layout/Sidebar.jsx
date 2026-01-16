import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SimpleBar from 'simplebar-react';
import { useSidebar } from '../../hooks/useSidebar.jsx'; // Trigger HMR refresh

const Sidebar = () => {
    const location = useLocation();
    const { toggleSidebar } = useSidebar();
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menuId) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }));
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="app-sidebar-menu">
            <SimpleBar className="h-100">
                <div id="sidebar-menu">
                    <div className="logo-box">
                        <Link className="logo logo-light" to="/">
                            <span className="logo-sm">
                                <span className="fs-22 fw-bold text-white">F</span>
                            </span>
                            <span className="logo-lg">
                                <span className="fs-24 fw-bold text-white">Fincorex</span>
                            </span>
                        </Link>
                        <Link className="logo logo-dark" to="/">
                            <span className="logo-sm">
                                <span className="fs-22 fw-bold text-dark">F</span>
                            </span>
                            <span className="logo-lg">
                                <span className="fs-24 fw-bold text-dark">Fincorex</span>
                            </span>
                        </Link>

                        <button className="mobile-close-btn" onClick={toggleSidebar}>
                            <Icon icon="solar:close-circle-bold-duotone" width="24" height="24" />
                        </button>
                    </div>

                    <ul id="side-menu">
                        <li className="menu-title">Menu</li>

                        <li>
                            <a
                                href="#sidebarDashboards"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('dashboards'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:home-2-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Dashboard </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.dashboards ? 'show' : ''}`} id="sidebarDashboards">
                                <ul className="nav-second-level">
                                    <li>
                                        <Link className={`tp-link ${isActive('/') ? 'active' : ''}`} to="/">Sales</Link>
                                    </li>
                                    <li>
                                        <Link className={`tp-link ${isActive('/analytics') ? 'active' : ''}`} to="/analytics">Analytics</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="menu-title mt-2">Accounts and Profile Management</li>

                        <li>
                            <a
                                href="#sidebarAccountProfile"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('accountProfile'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:user-circle-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Account / Profile Manager </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.accountProfile ? 'show' : ''}`} id="sidebarAccountProfile">
                                <ul className="nav-second-level">
                                    <li><Link className="tp-link" to="#">Create Individual Account</Link></li>
                                    <li><Link className="tp-link" to="#">Create Corporate Account</Link></li>
                                    <li><Link className="tp-link" to="#">Create Local Account</Link></li>
                                    <li><Link className="tp-link" to="#">Standing Order</Link></li>
                                    <li><Link className="tp-link" to="#">Account Balance Statement</Link></li>
                                    <li><Link className="tp-link" to="#">Lien Account</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link className="tp-link" to="#">
                                <span className="nav-icon">
                                    <Icon icon="solar:users-group-rounded-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Customer </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="tp-link" to="#">
                                <span className="nav-icon">
                                    <Icon icon="solar:wallet-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Accounts </span>
                            </Link>
                        </li>

                        <li>
                            <a
                                href="#sidebarAccountOfficer"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('accountOfficer'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:user-id-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Account Officer Management </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.accountOfficer ? 'show' : ''}`} id="sidebarAccountOfficer">
                                <ul className="nav-second-level">
                                    <li><Link className="tp-link" to="#">Account Allocation</Link></li>
                                    <li><Link className="tp-link" to="#">Account Transfer</Link></li>
                                    <li><Link className="tp-link" to="#">Account Summary</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a
                                href="#sidebarTransaction"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('transaction'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:transfer-horizontal-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Transaction </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.transaction ? 'show' : ''}`} id="sidebarTransaction">
                                <ul className="nav-second-level">
                                    <li><Link className="tp-link" to="#">Teller (Debit/Credit)</Link></li>
                                    <li><Link className="tp-link" to="#">System Account to Account</Link></li>
                                    <li><Link className="tp-link" to="#">Account to System Account</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a
                                href="#sidebarSystemReport"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('systemReport'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:chart-square-bold-duotone" width="20" height="20" />
                                </span>
                                <span> System Report </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.systemReport ? 'show' : ''}`} id="sidebarSystemReport">
                                <ul className="nav-second-level">
                                    <li><Link className="tp-link" to="#">Approved Transactions</Link></li>
                                    <li><Link className="tp-link" to="#">Pending Transactions</Link></li>
                                    <li><Link className="tp-link" to="#">Ledger Account</Link></li>
                                    <li><Link className="tp-link" to="#">Credit Bill Report</Link></li>
                                    <li><Link className="tp-link" to="#">Audit</Link></li>
                                    <li><Link className="tp-link" to="#">CBN Report</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a
                                href="#sidebarLoanManager"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('loanManager'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:hand-money-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Loan Manager </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.loanManager ? 'show' : ''}`} id="sidebarLoanManager">
                                <ul className="nav-second-level">
                                    <li><Link className="tp-link" to="#">View Loans</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a
                                href="#sidebarStaffManager"
                                data-bs-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); toggleMenu('staffManager'); }}
                            >
                                <span className="nav-icon">
                                    <Icon icon="solar:users-group-two-rounded-bold-duotone" width="20" height="20" />
                                </span>
                                <span> Staff Manager </span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className={`collapse ${openMenus.staffManager ? 'show' : ''}`} id="sidebarStaffManager">
                                <ul className="nav-second-level">
                                    <li><Link className="tp-link" to="#">Overview</Link></li>
                                    <li><Link className="tp-link" to="#">Employees</Link></li>
                                    <li><Link className="tp-link" to="#">Departments</Link></li>
                                    <li><Link className="tp-link" to="#">Pay Slip</Link></li>
                                    <li><Link className="tp-link" to="#">Salary Structure</Link></li>
                                    <li><Link className="tp-link" to="#">Payroll</Link></li>
                                    <li><Link className="tp-link" to="#">Tax</Link></li>
                                    <li><Link className="tp-link" to="#">Bonus and Deduction</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="clearfix"></div>
            </SimpleBar>
        </div>
    );
};

export default Sidebar;

import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '../../hooks/useTheme';
import { useSidebar } from '../../hooks/useSidebar.jsx';

const Topbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { toggleSidebar } = useSidebar();

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <div className="topbar-custom">
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                        <li>
                            <button className="button-toggle-menu nav-link" onClick={toggleSidebar}>
                                <Icon icon="solar:hamburger-menu-outline" className="noti-icon" width="24" height="24" />
                            </button>
                        </li>
                        <li className="d-none d-lg-block">
                            <form className="app-search d-none d-md-block me-auto">
                                <div className="position-relative topbar-search">
                                    <input type="text" className="form-control ps-4" placeholder="Search..." />
                                    <Icon
                                        icon="solar:minimalistic-magnifer-outline"
                                        className="align-middle fs-14 position-absolute text-muted top-50 translate-middle-y ms-2"
                                        width="18"
                                        height="18"
                                    />
                                </div>
                            </form>
                        </li>
                    </ul>

                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                        {/* Language Dropdown */}
                        <li className="dropdown topbar-dropdown">
                            <a className="nav-link dropdown-toggle me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="/src/assets/images/flags/us.svg" alt="user-image img-fluid" className="w-100 rounded-2" height="20" width="20" id="selected-language-image" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown">
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/us.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">English</span>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/in.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">Hindi</span>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/de.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">German</span>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/ca.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">Canada</span>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/au.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">Australia</span>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/ru.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">Russian</span>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <img src="/src/assets/images/flags/si.svg" alt="user-image" className="me-1 rounded" height="18" />
                                    <span className="align-middle">Italian</span>
                                </a>
                            </div>
                        </li>

                        {/* Fullscreen Button */}
                        <li className="d-none d-sm-flex">
                            <button type="button" className="btn nav-link" onClick={handleFullscreen}>
                                <Icon icon="solar:minimize-square-outline" className="fs-24 align-middle" width="24" height="24" />
                            </button>
                        </li>

                        {/* Theme Toggle */}
                        <li className="d-none d-sm-flex">
                            <button type="button" className="btn nav-link" onClick={toggleTheme}>
                                {theme === 'dark' ? (
                                    <Icon icon="solar:sun-2-outline" className="fs-24 align-middle" width="24" height="24" />
                                ) : (
                                    <Icon icon="solar:moon-outline" className="fs-24 align-middle" width="24" height="24" />
                                )}
                            </button>
                        </li>

                        {/* Notifications */}
                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <Icon icon="solar:bell-bing-outline" className="fs-24 align-middle" width="24" height="24" />
                                <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-lg">
                                <div className="dropdown-item noti-title">
                                    <h5 className="m-0 fs-16 fw-semibold">
                                        <span className="float-end">
                                            <a href="#" className="fs-14">
                                                <small className="text-primary">Make all as read</small>
                                            </a>
                                        </span>
                                        Notification
                                    </h5>
                                </div>

                                <div className="noti-scroll" data-simplebar>
                                    <a href="#" className="dropdown-item notify-item text-muted link-primary">
                                        <div className="d-flex align-items-center">
                                            <div className="notify-icon">
                                                <img src="/src/assets/images/users/avatar/avatar-3.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <p className="notify-details mb-0">Carl Steadham</p>
                                                    <Icon icon="solar:record-bold" className="fs-12 text-primary align-middle" />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="text-muted mb-0">Thursday 4:20pm</p>
                                                    <p className="text-muted mb-0">2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <a href="#" className="dropdown-item text-center text-primary notify-item notify-all fw-bold border-top border-light">
                                    View all <i className="fe-arrow-right"></i>
                                </a>
                            </div>
                        </li>

                        {/* User Dropdown */}
                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle nav-user me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="/src/assets/images/users/profile.jpg" alt="user-image" className="rounded-circle" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown">
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome Alex!</h6>
                                </div>

                                <a className="dropdown-item notify-item rounded-2" href="#">
                                    <Icon icon="solar:shield-user-outline" className="fs-18 align-middle" />
                                    <span>Profile</span>
                                </a>

                                <a className="dropdown-item notify-item rounded-2" href="#">
                                    <Icon icon="solar:settings-linear" className="fs-18 align-middle" />
                                    <span>Setting</span>
                                </a>

                                <a className="dropdown-item notify-item rounded-2" href="#">
                                    <Icon icon="solar:lock-keyhole-outline" className="fs-18 align-middle" />
                                    <span>Lock Screen</span>
                                </a>

                                <a className="dropdown-item notify-item rounded-2" href="#">
                                    <Icon icon="solar:login-3-outline" className="fs-18 align-middle" />
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

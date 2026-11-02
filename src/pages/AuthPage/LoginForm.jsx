import "./LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Logo from "../../assets/logo.png";

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaLock,
  FaCheckCircle,
  FaPhone

} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {

    const [action, setAction] = useState("signup");
    const [showPassword, setShowPassword] = useState(false);
    const [loading,setLoading]=useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [showForgotPopup, setShowForgotPopup] = useState(false);
    const [forgotValue, setForgotValue] = useState("");
    const [forgotLoading, setForgotLoading] = useState(false);

    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [otpLoading, setOtpLoading] = useState(false);

    const [showResetPopup, setShowResetPopup] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [resetLoading, setResetLoading] = useState(false);
    const [showPasswordSuccess, setShowPasswordSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();

        if (forgotValue.trim() === "") {
            toast.error("Please enter your email or phone number.");
            return;
        }

        setForgotLoading(true);

        setTimeout(() => {
            setForgotLoading(false);

            // Close forgot password popup
            setShowForgotPopup(false);

            // Open OTP popup
            setShowOtpPopup(true);

            toast.success("OTP sent successfully!");

        }, 1500);
    };

    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Automatically move to next input
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();

        const enteredOtp = otp.join("");

        if (enteredOtp.length !== 6) {
            toast.error("Please enter the complete 6-digit OTP.");
            return;
        }

        setOtpLoading(true);

        setTimeout(() => {
            setOtpLoading(false);

            // Close OTP popup
            setShowOtpPopup(false);

            // Clear OTP
            setOtp(["", "", "", "", "", ""]);

            // Open reset password popup
            setShowResetPopup(true);

            toast.success("OTP verified successfully!");

        }, 1500);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword.trim() === "") {
            toast.error("Please enter your new password.");
            return;
        }

        if (newPassword.length < 6) {
            toast.error("Password must contain at least 6 characters.");
            return;
        }

        if (confirmPassword.trim() === "") {
            toast.error("Please confirm your password.");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        setResetLoading(true);

        setTimeout(() => {
            setResetLoading(false);

            // Close reset popup
            setShowResetPopup(false);

            // Clear password fields
            setNewPassword("");
            setConfirmPassword("");

            // Show success popup
            setShowPasswordSuccess(true);

        }, 1500);
    };

   const handleSubmit = (e) => {
    e.preventDefault();

        if (action === "signup") {
            // Full Name
            if (formData.fullName.trim() === "") {
                toast.error("Please enter your full name.");
                return;
            }
            // Phone Number
            if (formData.phone.trim() === "") {
                toast.error("Please enter your phone number.");
                return;
            }
            // Phone Number Validation
            const phoneRegex = /^[0-9+\-\s()]{10,15}$/;

            if (!phoneRegex.test(formData.phone.trim())) {
                toast.error("Please enter a valid phone number.");
                return;
            }
        }
        /* EMAIL VALIDATION*/
        if (formData.email.trim() === "") {
            toast.error("Please enter your email.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email.");
            return;
        }
            //password validation
        if (formData.password.trim() === "") {
            toast.error("Please enter your password.");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must contain at least 6 characters.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (action === "login") {
                toast.success("Login Successful!");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            }

        else {

            setFormData({
                fullName: "",
                email: "",
                phone: "",
                password: "",
            });

            setShowSuccessPopup(true);

            setTimeout(() => {
                setShowSuccessPopup(false);
                setAction("login");
            }, 2500);
        }

    }, 2000);
    };

    return (
        <div className="login-wrapper">

            {/* Account Created Popup */}
            {showSuccessPopup && (
                <div className="success-overlay">
                    <div className="success-popup">

                        <div className="success-logo">
                            <img src={Logo} alt="SafeGuard Logo" />
                            <h2>
                                Safe <span>Guard</span>
                            </h2>
                        </div>

                        <div className="success-icon">
                            <FaCheckCircle />
                        </div>

                        <h3>Account Created Successfully!</h3>

                        <p className="success-email-message">
                            Your account has been created. Please Check your email to verify your account.
                        </p>

                    </div>
                </div>
            )}

            {/* Forgot Password Popup */}
            {showForgotPopup && (
                <div className="forgot-overlay">
                    <div className="forgot-popup">

                        {/* Logo */}
                        <div className="forgot-logo">
                            <img src={Logo} alt="SafeGuard Logo" />

                            <h2>
                                Safe <span>Guard</span>
                            </h2>
                        </div>

                        {/* Heading */}
                        <h3>Forgot Password?</h3>

                        {/* Message */}
                        <p className="forgot-message">
                            Enter your email or phone number and we'll send you OTP.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleForgotPassword}>

                            <label>Email or Phone Number</label>

                            <div className="forgot-input-box">
                                <FaEnvelope />

                                <input
                                    type="text"
                                    placeholder="Enter email or phone number"
                                    value={forgotValue}
                                    onChange={(e) => setForgotValue(e.target.value)}
                                />
                            </div>

                            {/* Send OTP */}
                            <button
                                type="submit"
                                className="send-otp-btn"
                                disabled={forgotLoading}
                            >
                                {forgotLoading ? (
                                    <div className="loader"></div>
                                ) : (
                                    "Send OTP"
                                )}
                            </button>

                            {/* Cancel */}
                            <button
                                type="button"
                                className="cancel-forgot-btn"
                                onClick={() => {
                                    setShowForgotPopup(false);
                                    setForgotValue("");
                                }}
                            >
                                Cancel
                            </button>

                        </form>
                    </div>
                </div>
            )}

            {showOtpPopup && (
                <div className="forgot-overlay">

                    <div className="forgot-popup otp-popup">

                        {/* Logo */}
                        <div className="forgot-logo">
                            <img src={Logo} alt="SafeGuard Logo" />

                            <h2>
                                Safe <span>Guard</span>
                            </h2>
                        </div>

                        <h3>Enter OTP</h3>

                        <p className="forgot-message">
                            We have sent a 6-digit verification code to
                            <br />
                            <strong>{forgotValue}</strong>
                        </p>

                        <form onSubmit={handleVerifyOtp}>

                            <div className="otp-container">

                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) =>
                                            handleOtpChange(e.target.value, index)
                                        }
                                        className="otp-input"
                                    />
                                ))}

                            </div>

                            <button
                                type="submit"
                                className="send-otp-btn"
                                disabled={otpLoading}
                            >
                                {otpLoading ? (
                                    <div className="loader"></div>
                                ) : (
                                    "Verify OTP"
                                )}
                            </button>

                            <button
                                type="button"
                                className="cancel-forgot-btn"
                                onClick={() => {
                                    setShowOtpPopup(false);
                                    setOtp(["", "", "", "", "", ""]);
                                }}
                            >
                                Cancel
                            </button>

                            <div className="resend-otp">
                                Didn't receive the code?
                                <span
                                    onClick={() => {
                                        toast.success("OTP resent successfully!");
                                    }}
                                >
                                    Resend OTP
                                </span>
                            </div>

                        </form>

                    </div>

                </div>
            )}

            {showResetPopup && (
                <div className="forgot-overlay">

                    <div className="forgot-popup reset-popup">
                        {/* Logo */}
                        <div className="forgot-logo">
                            <img
                                src={Logo}
                                alt="SafeGuard Logo"
                            />
                            <h2>
                                Safe <span>Guard</span>
                            </h2>
                        </div>
                        <h3>Create New Password</h3>
                        <form onSubmit={handleResetPassword}>
                            {/* New Password */}
                            <label>New Password</label>
                            <div className="forgot-input-box">
                                <FaLock />
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />

                                <span
                                    className="eye"
                                    onClick={() =>
                                        setShowNewPassword(!showNewPassword)
                                    }
                                >
                                    {showNewPassword
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                    }
                                </span>

                            </div>


                            {/* Confirm Password */}
                            <label>Confirm Password</label>

                            <div className="forgot-input-box">

                                <FaLock />

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />

                                <span
                                    className="eye"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                    }
                                </span>

                            </div>


                            {/* Reset Button */}
                            <button
                                type="submit"
                                className="send-otp-btn"
                                disabled={resetLoading}
                            >

                                {resetLoading ? (
                                    <div className="loader"></div>
                                ) : (
                                    "Reset Password"
                                )}

                            </button>


                            {/* Cancel */}
                            <button
                                type="button"
                                className="cancel-forgot-btn"
                                onClick={() => {
                                    setShowResetPopup(false);
                                    setNewPassword("");
                                    setConfirmPassword("");
                                }}
                            >
                                Cancel
                            </button>

                        </form>

                    </div>

                </div>
            )}

            {showPasswordSuccess && (
                <div className="forgot-overlay">

                    <div className="forgot-popup password-success-popup">

                        {/* Logo */}
                        <div className="forgot-logo">

                            <img
                                src={Logo}
                                alt="SafeGuard Logo"
                            />

                            <h2>
                                Safe <span>Guard</span>
                            </h2>

                        </div>


                        {/* Success Icon */}
                        <div className="password-success-icon">
                            <FaCheckCircle />
                        </div>


                        <h3>Password Changed!</h3>

                        <p className="forgot-message">
                            Your password has been successfully changed.
                            You can now login using your new password.
                        </p>


                        <button
                            className="send-otp-btn"
                            onClick={() => {
                                setShowPasswordSuccess(false);
                                setAction("login");
                            }}
                        >
                            Continue to Login
                        </button>

                    </div>

                </div>
            )}

            {/* Overlay */}
            <div className="overlay"></div>

            {/* Login Card */}
            <div className={`login-card ${action}`}>

                {/* Logo */}
                <img
                    src={Logo}
                    alt="SafeGuard Logo"
                    className="card-logo"
                />
                {/* Heading */}

                <h1>
                    {action === "login" ? (
                        <>
                        Welcome <span>Back</span>
                        </>
                    ) : (
                        <>
                        Create <span>Account</span>
                        </>
                    )}
                </h1>

                <p>
                    {action === "login"
                        ? "Login to continue monitoring your surveillance system."
                        : "Create your SafeGuard account to continue."}
                </p>

                {/* Tabs */}

                <div className="auth-tabs">

                    <button
                        className={action === "signup" ? "active" : ""}
                        onClick={() => setAction("signup")}
                    >
                        Sign Up
                    </button>

                    <button
                        className={action === "login" ? "active" : ""}
                        onClick={() => setAction("login")}
                    >
                        Login
                    </button>

                </div>

                {/* Form */}

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    {action === "signup" && (
                        <>
                        <label>Full Name</label>
                        <div className="input-box">
                            <FaUser />
                            <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        </>
                    )}

                    {/* Email */}
                    <label>Email Address</label>
                    <div className="input-box">
                        <FaEnvelope />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/*Phone */}
                    {action === "signup" && (
                        <>
                            <label>Phone No</label>
                            <div className="input-box">
                                <FaPhone />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* Password */}
                    <label>Password</label>
                    <div className="input-box">

                        <FaLock />

                        <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />

                        {showPassword ? (
                        <FaEyeSlash
                            className="eye"
                            onClick={() => setShowPassword(false)}
                        />
                        ) : (
                        <FaEye
                            className="eye"
                            onClick={() => setShowPassword(true)}
                        />
                        )}

                    </div>

                    {/* Forgot */}
                    {action === "login" && (
                        <div 
                            className="forgot"
                            onClick={() => setShowForgotPopup(true)}
                        >
                        Forgot Password?
                        </div>
                    )}

                {/* Button */}
                    <button className="signin-btn" disabled={loading} >
                        { loading ?
                            <div className="loader"></div> : 
                            action==="login" ? "Login" : "Create Account" 
                        }
                    </button>

                    {action === "signup" && (
                    <>
                        <div className="or-divider">
                            <span>OR</span>
                        </div>

                        <button
                            type="button"
                            className="google-btn"
                            onClick={() => toast("Google Sign-In will be connected with backend")}
                            >
                            <FcGoogle className="google-icon" />
                            <span>Continue with Google</span>
                        </button>
                    </>
                    )}
                </form>

                {/* Bottom */}
                <div className="bottom-link">
                    {action === "login" ? (
                        <>
                        Don't have an account?
                        <span
                            onClick={() => setAction("signup")}
                        >
                            {" "}
                            Sign Up
                        </span>
                        </>
                    ) : (
                        <>
                        Already have an account?

                        <span
                            onClick={() => setAction("login")}
                        >
                            {" "}
                            Login
                        </span>
                        </>
                    )}

                </div>

            </div>

        </div>
    );
}

export default LoginForm;
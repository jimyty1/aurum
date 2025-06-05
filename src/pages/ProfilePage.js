import React, {useEffect, useState} from 'react';
import '../css/ProfilePage.css';
import {profileImg} from "../utils/imageLoader";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('orders');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="section-wrapper">
            <div className="section-text">
              <h2>Previous Orders</h2>
              <ul>
                <li>Order #A1024 — Gucci coat — Delivered</li>
                <li>Order #A1023 — Orange dress — Returned</li>
                <li>Order #A1021 — Burberry shirt — Delivered</li>
              </ul>
            </div>
            <div className="section-image">
              <img className="profileImg" src={profileImg} alt="Profile" />
            </div>
          </div>
        );

      case 'returns':
        return (
          <div className="section-wrapper">
            <div className="section-text">
              <h2>Returns</h2>
              <p>You have 1 item currently being returned.</p>
              <p>Return #R5432 — Orange dress — In transit</p>
            </div>
            <div className="section-image">
              <img className="profileImg" src={profileImg} alt="Profile" />
            </div>
          </div>
        );

      case 'return-info':
        return (
          <div className="section-wrapper">
            <div className="section-text">
              <h2>Return Information</h2>
              <p>You can return items within 14 days of delivery. Items must be unworn with tags attached.</p>
              <p>Return shipping is free for premium members.</p>
            </div>
            <div className="section-image">
              <img className="profileImg" src={profileImg} alt="Profile" />
            </div>
          </div>
        );

      case 'contact-preferences':
        return (
          <div className="section-wrapper">
            <div className="section-text">
              <h2>Contact Preferences</h2>
              <p>Email: ✅ Promotions | ✅ Order updates</p>
              <p>Text: ⬜ Restock alerts | ✅ Delivery notifications</p>
              <p>You can update your contact settings in your account panel.</p>
            </div>
            <div className="section-image">
              <img className="profileImg" src={profileImg} alt="Profile" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <aside className="profile-nav" style={{marginTop:'30px'}}>
        <ul>
          <li onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>Previous Orders</li>
          <li onClick={() => setActiveTab('returns')} className={activeTab === 'returns' ? 'active' : ''}>Returns</li>
          <li onClick={() => setActiveTab('return-info')} className={activeTab === 'return-info' ? 'active' : ''}>Return Information</li>
          <li onClick={() => setActiveTab('contact-preferences')} className={activeTab === 'contact-preferences' ? 'active' : ''}>Contact Preferences</li>
        </ul>
      </aside>

      <main className="profile-content">
        {renderContent()}
      </main>
    </div>
  );
}

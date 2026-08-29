# Zenith Bank Mobile App Interface

A fully functional mobile banking application interface built with HTML, CSS, and JavaScript, replicating the Zenith Bank app UI and features.

## Features

### ✨ Core Functionality
- **Balance Display**: View total balance with hide/show toggle
- **Account Information**: Display account details and ledger balance
- **eaZyLinks**: Quick access to banking services (QR Payments, Travel, Cable TV, Cards, MyBVN, Scheduled Payments, Customize, Settings)
- **Navigation**: Bottom navigation bar with Overview, Airtime, Transfer, and Bills sections
- **Mobile Menu**: Hamburger menu with dashboard navigation
- **Transaction History**: Access transaction history (placeholder)
- **Modal Alerts**: Interactive modals for user feedback

### 🎨 Design
- **Responsive Design**: Works seamlessly on mobile devices (360px - 600px)
- **Gradient Theme**: Red/maroon color scheme matching Zenith Bank branding
- **Modern UI**: Smooth animations and transitions
- **Mobile-First**: Optimized for touch interactions
- **Status Bar**: Displays time, LTE signal, and battery indicator

### 🔧 Interactive Elements
- **Toggle Buttons**: Balance visibility toggle with animated switch
- **Menu System**: Functional hamburger menu with smooth transitions
- **Action Buttons**: eaZyLinks buttons with hover/active states
- **Modal System**: Reusable modal for displaying messages and alerts
- **Navigation**: Working bottom navigation with active state indicators

## File Structure

```
zenith-bank-app/
├── index.html       # Main HTML structure
├── styles.css       # Complete styling and responsive design
├── script.js        # JavaScript functionality and interactions
└── README.md        # This file
```

## Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cybersecurityainet-png/zenith-bank-app.git
   cd zenith-bank-app
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then navigate to http://localhost:8000
     ```

## Interactive Features

### Balance Management
- Click "Hide balance" button to toggle visibility
- Use the toggle switch for quick balance display control
- Balance hides/shows in all locations (total balance, account balance, ledger)

### Navigation
- **Hamburger Menu**: Click ☰ button to open/close menu
- **Bottom Nav**: Click Overview, Airtime, Transfer, or Bills
- **eaZyLinks**: Click any service icon for more information
- **History**: Click 📅 History button to view transaction history

### Time Display
- Displays current time in 24-hour format
- Auto-updates every minute

## Customization

### Colors
Modify the main color by changing `#d71e28` (Zenith Red) in `styles.css`:
```css
/* Header and accents */
background: linear-gradient(135deg, #d71e28 0%, #c41623 100%);
color: #d71e28;
```

### Balance Amount
Change the balance in `index.html`:
```html
<div class="balance-amount" id="displayBalance">₦81.67</div>
```

### Account Information
Update account details in `index.html`:
```html
<span class="account-number">1216352932 - ACTIVE</span>
<div class="account-name">BARASAL ALIYU MUKHTAR MULTI B.LINKS</div>
```

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Browsers (iOS Safari, Chrome Android)

## Features for Enhancement

- [ ] Real transaction data integration
- [ ] Authentication system
- [ ] API integration with backend
- [ ] Push notifications
- [ ] Biometric authentication
- [ ] Dark mode theme
- [ ] Transaction filtering and search
- [ ] Budget tracking
- [ ] Investment options
- [ ] Customer support chat

## License

This project is open source and available under the MIT License.

## Author

Developed as a functional prototype of the Zenith Bank mobile banking interface.

---

**Note**: This is a frontend prototype. For production use, integrate with proper backend APIs and security measures.

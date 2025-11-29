# 🔐 CAPTCHA Implementation Guide

## Overview

The SafeHaven application implements two types of CAPTCHA systems to prevent bot abuse and ensure security:

1. **Visual CAPTCHA** - Advanced visual code verification (used on Registration)
2. **Math CAPTCHA** - Simple mathematical question verification (used on Login)

---

## 🎨 Visual CAPTCHA (Registration Page)

### Location
`/components/captcha/Captcha.tsx`

### Features
- **Random 6-character code** generation with mixed case letters and numbers
- **Visual distortion** with rotated characters and random colors
- **Background noise** lines for added security
- **Refresh button** to generate new CAPTCHA
- **Real-time verification** with visual feedback
- **Error handling** with auto-refresh on incorrect attempts

### How It Works

1. **Code Generation**
   - Generates 6 random alphanumeric characters
   - Excludes confusing characters (0, O, I, l, 1)
   - Each character has random rotation and color

2. **Visual Elements**
   - Gradient background with diagonal stripes
   - Random color for each character
   - Slight rotation (-10° to +10°)
   - Background noise lines
   - Text shadow for depth

3. **User Interaction**
   - User types the code in the input field
   - Click "Verify CAPTCHA" button
   - Instant feedback with success/error messages
   - Refresh icon to generate new code

### Usage Example

```tsx
import { Captcha } from '../captcha/Captcha';

function MyComponent() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <Captcha 
      onVerify={setCaptchaVerified}
      error={errors.captcha}
    />
  );
}
```

### Visual States

- **Default:** Grey input with CAPTCHA code displayed
- **Verified:** Green border with checkmark icon
- **Failed:** Red border with X icon, auto-regenerates after 1.5s
- **Disabled:** Green background when verified

---

## 🧮 Math CAPTCHA (Login Page)

### Location
`/components/captcha/SimpleCaptcha.tsx`

### Features
- **Simple math questions** (addition and subtraction)
- **8 predefined questions** randomly selected
- **Numeric input only** validation
- **Instant verification** with visual feedback
- **Auto-refresh** on incorrect answers

### How It Works

1. **Question Selection**
   - Randomly selects from 8 math questions
   - Questions include basic addition (e.g., "5 + 3")
   - Questions include basic subtraction (e.g., "10 - 4")

2. **Verification**
   - User enters numeric answer
   - System compares with correct answer
   - Success shows green border and checkmark
   - Failure shows error and generates new question

3. **Security Features**
   - Only accepts numeric input
   - Auto-refresh prevents repeated attempts
   - Lightweight and fast verification

### Usage Example

```tsx
import { SimpleCaptcha } from '../captcha/SimpleCaptcha';

function MyComponent() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <SimpleCaptcha 
      onVerify={setCaptchaVerified}
      error={errors.captcha}
    />
  );
}
```

### Available Questions

1. What is 5 + 3? → 8
2. What is 10 - 4? → 6
3. What is 7 + 2? → 9
4. What is 12 - 5? → 7
5. What is 6 + 4? → 10
6. What is 15 - 8? → 7
7. What is 9 + 3? → 12
8. What is 11 - 6? → 5

---

## 🔧 Implementation Details

### Registration Form Integration

```tsx
// In /components/auth/Register.tsx
import { Captcha } from '../captcha/Captcha';

const [captchaVerified, setCaptchaVerified] = useState(false);

// In form validation
if (!captchaVerified) {
  newErrors.captcha = 'Please verify you are not a robot';
}

// In JSX
<Captcha 
  onVerify={setCaptchaVerified}
  error={errors.captcha}
/>
```

### Login Form Integration

```tsx
// In /components/auth/Login.tsx
import { SimpleCaptcha } from '../captcha/SimpleCaptcha';

const [captchaVerified, setCaptchaVerified] = useState(false);

// In form validation
if (!captchaVerified) {
  newErrors.captcha = 'Please complete the CAPTCHA verification';
}

// In JSX
<SimpleCaptcha 
  onVerify={setCaptchaVerified}
  error={errors.captcha}
/>
```

---

## 🎯 Props API

### Captcha Component

```typescript
interface CaptchaProps {
  onVerify: (verified: boolean) => void;  // Callback when verification status changes
  error?: string;                          // Optional error message to display
}
```

### SimpleCaptcha Component

```typescript
interface SimpleCaptchaProps {
  onVerify: (verified: boolean) => void;  // Callback when verification status changes
  error?: string;                          // Optional error message to display
}
```

---

## 🎨 Styling & Theming

Both CAPTCHA components use the application's theme colors:

- Primary color: `var(--color-primary)`
- Background: `var(--color-bg)`
- Success: Green (#10B981)
- Error: Red (#EF4444)

### Responsive Design

- Mobile-friendly layouts
- Touch-friendly button sizes
- Readable text on all screen sizes
- Accessible color contrasts

---

## ♿ Accessibility

### Features
- Proper label associations
- Keyboard navigation support
- Clear error messages
- Visual and text feedback
- ARIA attributes (can be enhanced)

### Potential Improvements
- Add audio CAPTCHA alternative
- Implement screen reader announcements
- Add keyboard shortcuts
- Increase contrast ratios

---

## 🔒 Security Considerations

### Current Implementation
- ✅ Bot prevention through visual/math challenges
- ✅ Client-side validation
- ✅ Random code generation
- ✅ Limited attempt feedback

### Production Recommendations
- 🔄 Implement server-side verification
- 🔄 Add rate limiting
- 🔄 Track failed attempts
- 🔄 Consider using reCAPTCHA v3 for production
- 🔄 Add IP-based throttling
- 🔄 Implement session tokens

---

## 🚀 Future Enhancements

### Planned Features
1. **Image-based CAPTCHA**
   - Select images matching criteria
   - Grid-based selection

2. **Audio CAPTCHA**
   - Accessibility for visually impaired users
   - Spoken number/letter sequences

3. **Progressive Difficulty**
   - Increase difficulty after failed attempts
   - Adaptive challenge levels

4. **Backend Integration**
   - Server-side verification
   - Token-based validation
   - Attempt tracking

5. **Analytics**
   - Track success/failure rates
   - Monitor bot activity
   - A/B testing different CAPTCHA types

---

## 📊 Testing

### Manual Testing Checklist

#### Visual CAPTCHA (Registration)
- [ ] CAPTCHA code displays correctly
- [ ] Refresh button generates new code
- [ ] Correct code entry shows success
- [ ] Incorrect code shows error and refreshes
- [ ] Visual feedback is clear
- [ ] Mobile responsive

#### Math CAPTCHA (Login)
- [ ] Math question displays
- [ ] Only numbers can be entered
- [ ] Correct answer validates
- [ ] Wrong answer shows error
- [ ] New question generates on error
- [ ] Keyboard navigation works

### Integration Testing
- [ ] Cannot submit registration without CAPTCHA
- [ ] Cannot submit login without CAPTCHA
- [ ] Form validation includes CAPTCHA check
- [ ] Error states display properly
- [ ] Success states work correctly

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** CAPTCHA not showing
- **Solution:** Check component import paths
- **Solution:** Verify component is rendered in form

**Issue:** Verification not working
- **Solution:** Ensure `onVerify` callback is connected
- **Solution:** Check state management in parent component

**Issue:** Styling looks broken
- **Solution:** Verify Tailwind CSS is loaded
- **Solution:** Check CSS variable definitions

**Issue:** CAPTCHA doesn't reset
- **Solution:** Check state management
- **Solution:** Ensure component remounts or refreshes

---

## 📝 Best Practices

### Do's ✅
- Always validate CAPTCHA on form submission
- Provide clear error messages
- Allow users to refresh/retry
- Make CAPTCHA accessible
- Use appropriate difficulty level

### Don'ts ❌
- Don't make CAPTCHA too difficult
- Don't skip server-side validation (in production)
- Don't forget mobile users
- Don't use only CAPTCHA for security
- Don't store CAPTCHA answers in localStorage

---

## 📚 Additional Resources

### Related Components
- `/components/auth/Register.tsx` - Registration form
- `/components/auth/Login.tsx` - Login form
- `/contexts/AuthContext.tsx` - Authentication logic

### Documentation
- [OWASP CAPTCHA Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/CAPTCHA_Cheat_Sheet.html)
- [W3C Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/)
- [Google reCAPTCHA](https://www.google.com/recaptcha/about/)

---

**Note:** This is a demonstration implementation. For production use with real users, consider implementing server-side CAPTCHA verification and using established services like Google reCAPTCHA, hCaptcha, or Cloudflare Turnstile.

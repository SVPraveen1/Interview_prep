    # Interview Prep - AI-Powered Mock Interview Platform

A modern web application that helps users practice and improve their interview skills through AI-powered mock interviews with real-time voice interaction and detailed feedback analysis.

## 🌟 Features

- **AI Voice Interviews**: Practice interviews with an AI interviewer using natural voice conversations powered by Vapi AI
- **Personalized Interview Generation**: Create custom interviews tailored to specific roles, tech stacks, and experience levels
- **Real-time Feedback**: Get instant AI-generated feedback on communication skills, technical knowledge, problem-solving abilities, and more
- **Interview Library**: Access interviews created by other users for additional practice opportunities
- **Comprehensive Analytics**: Receive detailed performance breakdowns with scores across multiple categories
- **Secure Authentication**: Firebase-powered authentication system for user management

## 🚀 How It Works

### User Flow

1. **Sign Up/Sign In**: Create an account or log in to access the platform
2. **Dashboard**: View two main sections:
   - **Your Interviews**: Interviews you've created and can retake
   - **Take an Interview**: Interviews created by other users available for practice
3. **Start Interview**: Create a new interview by specifying:
   - Job role
   - Experience level
   - Tech stack
   - Interview type (technical/behavioral focus)
   - Number of questions
4. **AI Interview Session**: Engage in a real-time voice conversation with the AI interviewer
5. **Receive Feedback**: Get comprehensive AI-generated feedback including:
   - Overall score (0-100)
   - Category-wise performance analysis
   - Strengths identification
   - Areas for improvement
   - Final assessment

### Interview Types

- **Your Interviews**: Interviews you've created based on your preferences - perfect for practicing specific roles or technologies
- **Take an Interview**: Pre-created interviews by other users - great for exploring different interview scenarios and challenges

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **AI Integration**: 
  - Vapi AI for voice conversations
  - Google Gemini 2.5 Flash for interview generation and feedback
- **Voice Features**: 
  - Deepgram for transcription
  - ElevenLabs for AI voice
- **Form Management**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

## 📋 Prerequisites

- Node.js 20+ 
- npm/yarn/pnpm
- Firebase project with Firestore and Authentication enabled
- Vapi AI account and API keys
- Google AI Studio API key

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SVPraveen1/Interview_prep.git
   cd mock_interview_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Client Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Firebase Admin
   FIREBASE_ADMIN_PROJECT_ID=your_admin_project_id
   FIREBASE_ADMIN_CLIENT_EMAIL=your_admin_client_email
   FIREBASE_ADMIN_PRIVATE_KEY=your_admin_private_key

   # Vapi AI
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

   # Google AI
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── (auth)/              # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/              # Protected routes
│   │   ├── page.tsx         # Dashboard
│   │   └── interview/
│   │       ├── page.tsx     # Interview creation
│   │       └── [id]/
│   │           ├── page.tsx         # Interview session
│   │           └── feedback/
│   │               └── page.tsx     # Feedback display
│   └── api/
│       └── vapi/
│           └── generate/    # Interview generation endpoint
├── components/              # React components
│   ├── Agent.tsx           # Voice interview component
│   ├── AuthForm.tsx        # Authentication form
│   ├── InterviewCard.tsx   # Interview display card
│   └── ui/                 # UI primitives
├── lib/
│   ├── actions/            # Server actions
│   │   ├── auth.action.ts
│   │   └── general.action.ts
│   └── vapi.sdk.ts         # Vapi SDK integration
├── firebase/               # Firebase configuration
│   ├── admin.ts
│   └── client.ts
└── types/                  # TypeScript definitions
```

## 🎯 Key Features Explained

### Interview Generation
The AI generates personalized interview questions based on:
- **Role**: Software Engineer, Product Manager, Data Scientist, etc.
- **Level**: Junior, Mid-level, Senior
- **Tech Stack**: React, Node.js, Python, AWS, etc.
- **Type**: Technical-focused or Behavioral-focused
- **Amount**: Number of questions (customizable)

### Feedback System
After completing an interview, users receive detailed feedback including:
- **Communication Skills**: Clarity, articulation, and structured responses
- **Technical Knowledge**: Understanding of key concepts
- **Problem Solving**: Analytical thinking and solution approach
- **Cultural Fit**: Alignment with professional expectations
- **Confidence and Clarity**: Overall delivery and engagement

Each category is scored from 0-100 with specific comments and recommendations.

## 🔒 Security

- Firebase Authentication for secure user management
- Server-side authentication verification
- Protected routes using Next.js middleware
- Environment variables for sensitive data
- Firestore security rules (configure in Firebase Console)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop browsers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Praveen**
- GitHub: [@SVPraveen1](https://github.com/SVPraveen1)

## 🙏 Acknowledgments

- [Vapi AI](https://vapi.ai) for voice conversation capabilities
- [Google Gemini](https://ai.google.dev/) for AI-powered interview generation and feedback
- [Firebase](https://firebase.google.com/) for authentication and database
- [Next.js](https://nextjs.org/) for the React framework
- [Vercel](https://vercel.com/) for hosting platform

## 📞 Support

For support, questions, or feedback, please open an issue in the GitHub repository.

---

Made with ❤️ for interview preparation

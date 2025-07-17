import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile';

export function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

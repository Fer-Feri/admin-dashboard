import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import ToastProvider from '@/components/ToastProvider';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata: Metadata = {
	title: 'Admin Dashboard',
	description: 'Admin Dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl" suppressHydrationWarning>
			<body className="font-sans">
				<ThemeProvider>
					{children}
					<ToastProvider />
				</ThemeProvider>
			</body>
		</html>
	);
}

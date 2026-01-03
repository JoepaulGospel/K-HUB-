import "./globals.css";
export const metadata = {
title: "K-HUB | Creative Infrastructure",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body style={{ margin: 0, padding: 0, backgroundColor: '#000000' }}>{children}</body>
</html>
);
}

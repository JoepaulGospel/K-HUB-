import "./globals.css";
export const metadata = {
title: "K-HUB | Creative Infrastructure",
description: "The White-Label Command Center",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body style={{ backgroundColor: '#000000', color: '#ffffff' }}>
{children}
</body>
</html>
);
}

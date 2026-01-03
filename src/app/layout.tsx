import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
title: "K-HUB | Creative Infrastructure",
description: "The White-Label Command Center",
};
export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body class="bg-black text-white">{children}</body>
</html>
);
}

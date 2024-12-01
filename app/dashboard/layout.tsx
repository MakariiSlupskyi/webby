export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    'Apps',
    'Account',
    'Pricing',
    'Settings',
  ]

  return (
    <>
      {children}
    </>
  );
}

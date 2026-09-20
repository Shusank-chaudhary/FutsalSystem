const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-xl font-bold text-gradient">
          FUTSAL<span className="text-foreground">ARENA</span>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Futsal Arena Nepal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

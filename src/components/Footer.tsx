type FooterProps = React.HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 mt-12" {...props}>
      <p className="py-6 px-8 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} All Time Performance | Vahala Designs
      </p>
    </footer>
  );
}

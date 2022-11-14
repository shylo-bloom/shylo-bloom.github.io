import Link from "next/link";

export const NavLinks = () => {
  return (
    <div className="links">
      <p className="menu__link blue">
        <Link href="/shop">Shop</Link>
      </p>
      <p className="menu__link green">
        <Link href="/tickets">Tickets</Link>
      </p>
      <p className="menu__link yellow">
        <Link href="/contact">Contact</Link>
      </p>
      <p className="menu__link red">
        <Link href="/music">Music</Link>
      </p>
    </div>
  );
};

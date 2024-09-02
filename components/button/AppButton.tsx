import Link from "next/link";

interface AppButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  white?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  href,
  onClick,
  children,
  white,
}) => {
  const classes = `relative lg:py-3.5 md:py-2 py-1.5 lg:px-10 md:px-8 px-6 font-medium lg:leading-[23.12px] md:leading-[21.12px] sm:leading-[19.12px] leading-[18.12px] lg:text-lg md:text-[14px] sm:text-[12px] text-[11px] rounded-xl bg-darkColor text-white`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
    </button>
  );

  const renderLink = () => (
    <Link href={href || ""} className={classes}>
      <span>{children}</span>
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default AppButton;

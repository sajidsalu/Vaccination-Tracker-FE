export type IconTypes = "hamburger" | "logout";
export type SVGIconProps = { name: IconTypes };

const getSvg = (name: IconTypes): JSX.Element => {
  switch (name) {
    case "hamburger":
      return (
        <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 0.784H4V2.784H16V0.784ZM16 6.784H0V8.784H16V6.784ZM16 12.784H4V14.784H16V12.784Z"
            fill="#fff"
          />
        </svg>
      );
      case "logout":
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.2666 8C9.84228 8 9.43531 8.16857 9.13526 8.46863C8.8352 8.76869 8.66663 9.17565 8.66663 9.6V22.4C8.66663 22.8243 8.8352 23.2313 9.13526 23.5314C9.28383 23.6799 9.46021 23.7978 9.65433 23.8782C9.84845 23.9586 10.0565 24 10.2666 24H16.6666C17.091 24 17.4979 23.8314 17.798 23.5314C18.0981 23.2313 18.2666 22.8243 18.2666 22.4V18.4H16.6666V22.4H10.2666V9.6H16.6666V13.6H18.2666V9.6C18.2666 9.17565 18.0981 8.76869 17.798 8.46863C17.4979 8.16857 17.091 8 16.6666 8H10.2666ZM19.8666 12.8V15.2H12.6666V16.8H19.8666V19.2L23.0666 16L19.8666 12.8Z"
            fill="#fff"
          />
        </svg>
      );
  }
};
export const SVGIcon = (props: SVGIconProps) => {
  return getSvg(props.name);
};

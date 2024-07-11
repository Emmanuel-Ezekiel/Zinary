export const NavDropdownIcon = () => {
  return (
    <svg
      width="6"
      height="4"
      viewBox="0 0 6 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.494015 0.6327C0.558358 0.568304 0.634629 0.536133 0.722758 0.536133H5.27719C5.36536 0.536133 5.44158 0.568304 5.50597 0.6327C5.57037 0.697168 5.60254 0.773386 5.60254 0.861497C5.60254 0.94959 5.57037 1.02581 5.50597 1.09022L3.22874 3.36745C3.16428 3.43184 3.08806 3.46409 2.99997 3.46409C2.91187 3.46409 2.83558 3.43184 2.77124 3.36745L0.494015 1.0902C0.42969 1.02581 0.397394 0.94959 0.397394 0.861479C0.397394 0.773386 0.42969 0.697168 0.494015 0.6327Z"
        fill="#A8A8A8"
      />
    </svg>
  );
};

interface Props {
  type: string;
}
export const TableDropdownIcon = ({ type }: Props) => {
  if (type === "down") {
    return (
      <svg
        width="6"
        height="3"
        viewBox="0 0 6 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L3 3L6 0H0Z" fill="white" />
      </svg>
    );
  }
  if (type === "up") {
    return (
      <svg
        width="6"
        height="3"
        viewBox="0 0 6 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 3L3 -2.62268e-07L0 3L6 3Z" fill="white" />
      </svg>
    );
  }

  return null;
};

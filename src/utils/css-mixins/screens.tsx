interface Sizes {
  phone: string;
  tablet: string;
  desktop: string;
}

const size = {
  phone: '768px',
  tablet: '1024px',
  desktop: '1920px',
};

export const device: Sizes = {
  phone: `(max-width: ${size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

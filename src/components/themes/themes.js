const spaces = {
  xs: "0.5rem",
  s: "0.9rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3rem",
  auto: "auto",
};
const sizes = {
  xs: "50px",
  s: "100px",
  m: "150px",
  l: "200px",
  xl: "300px",
  auto: "500px",
};
const utils = {
  boxShadow:
    "0px 5px 5px -3px rgba(0,0,0,0.05), 0px 8px 10px 1px rgba(0,0,0,0.02), 0px 3px 14px 2px rgba(0,0,0,0.02)",
};

export const lightTheme = { name: "light", spaces, sizes, utils };
export const darkTheme = { name: "dark", spaces, sizes, utils };

lightTheme.colors = {
  primary: "#222",
  accent: "#FF7033",
  secondary: "#999",
  bgPrimary: "#fff",
  bgGray: "#eee",
  bgSecondary: "#fff",
  borderColor: "#eee",
  danger: "tomato",
};
darkTheme.colors = {
  primary: "white",
  accent: "#FF7033",
  secondary: "#999",
  bgPrimary: "#222",
  bgGray: "#555",
  bgSecondary: "#555",
  borderColor: "#111",
  danger: "blue",
};

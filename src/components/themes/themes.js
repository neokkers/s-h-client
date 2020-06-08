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

export const lightTheme = { name: "light", spaces, sizes };
export const darkTheme = { name: "dark", spaces, sizes };

lightTheme.colors = {
  primary: "#222",
  accent: "#5290f2",
  secondary: "#999",
  bgPrimary: "#fff",
  bgGray: "#eee",
  bgSecondary: "#fff",
  borderColor: "#eee",
  danger: "tomato",
};
darkTheme.colors = {
  primary: "white",
  accent: "tomato",
  secondary: "#999",
  bgPrimary: "#222",
  bgGray: "#555",
  bgSecondary: "#555",
  borderColor: "#111",
  danger: "blue",
};

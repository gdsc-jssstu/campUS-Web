export const path = {
  home: "/",
  myProfile: "/profile",
  requests: "/requests",
  myRequests: "/myrequests",
  aboutUs: "/aboutus",
  logOut: "/",
};

export function camelize(text) {
  const lowercaseText = text.toLowerCase();
  return lowercaseText
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

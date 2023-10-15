export const path = {
  home: "/",
  myProfile: "/profile",
  // TODO: update below routes when defined
  requests: "/a",
  myRequests: "/b",
  aboutUs: "/c",
  logOut: "/d",
};

export function camelize(text) {
  const lowercaseText = text.toLowerCase();
  return lowercaseText
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

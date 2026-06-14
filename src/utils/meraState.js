export function sendMeraState(state) {
  try {
    localStorage.setItem("mera-last-state", JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save Mera state locally:", error);
  }

  try {
    const channel = new BroadcastChannel("page-load");
    channel.postMessage(state);
    channel.close();
  } catch (error) {
    console.warn("Could not broadcast Mera state:", error);
  }

  fetch("/mera-state", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(state),
  }).catch((error) => {
    console.warn("Could not send Mera state to dev server:", error);
  });
}

export async function fetchMeraState() {
  const response = await fetch("/mera-state", { cache: "no-store" });
  if (!response.ok) return null;

  const data = await response.json();
  return data && data.hasState ? data.state : null;
}

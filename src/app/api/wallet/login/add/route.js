export const POST = async (req, res) => {
  console.log("Route hit: connectWallet");
  try {
    return new Response(
      JSON.stringify({
        message: "Wallet connected successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

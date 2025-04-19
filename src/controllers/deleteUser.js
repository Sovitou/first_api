export const deleteUser = async (req, res) => {
  const user = req.user;

  try {
    await user.destroy();
    await user.save();

    res.status(200).json({ msg: "User deleted successfully", user });
  } catch (error) {
    console.error("Error delecting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }

  res.status(200).json({ msg: updatedUser });
};

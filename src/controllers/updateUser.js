export const updateUser = async (req, res) => {
  const { name, sex } = req.body;
  const user = req.user;

  try {
    if (name !== undefined) user.name = name;
    if (sex !== undefined) user.sex = sex;

    await user.save();

    res.status(200).json({ msg: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }

  res.status(200).json({ msg: updatedUser });
};

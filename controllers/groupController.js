exports.createGroup = (req, res) => {
  res.json({ message: "Group created" });
};

exports.addMember = (req, res) => {
  res.json({ message: "Member added" });
};

exports.myGroups = (req, res) => {
  res.json({ message: "My groups" });
};

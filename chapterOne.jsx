// SQL মূলত ডাটাবেসে ডাটা সংরক্ষণ, খোঁজা, আপডেট ও মুছে ফেলার ভাষা।Example:SELECT * FROM users WHERE age > 18;

// NoSQL ডাটাবেসগুলি সাধারণত ডকুমেন্ট, কী-ভ্যালু, গ্রাফ বা কলাম-ভিত্তিক স্টোরেজ ব্যবহার করে।Example:db.users.find({ age: { $gt: 18 } });

// prisma hocce ekta ORM tool ja database er sathe kach korar jonno use hoy. Eita SQL query lekhar dorkar chara amader code er maddhomei database er sathe interact korte dey. Example:
const shohojKothayPrisma = `
  const users = await prisma.user.findMany({
    where: { age: { gt: 18 } },
  });
`;
// All code examples have their own documentation.

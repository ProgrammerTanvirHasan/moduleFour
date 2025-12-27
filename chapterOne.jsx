// SQL মূলত ডাটাবেসে ডাটা সংরক্ষণ, খোঁজা, আপডেট ও মুছে ফেলার ভাষা।Example:SELECT * FROM users WHERE age > 18;

// NoSQL ডাটাবেসগুলি সাধারণত ডকুমেন্ট, কী-ভ্যালু, গ্রাফ বা কলাম-ভিত্তিক স্টোরেজ ব্যবহার করে।Example:db.users.find({ age: { $gt: 18 } });

// prisma hocce ekta ORM tool ja database er sathe kach korar jonno use hoy. Eita SQL query lekhar dorkar chara amader code er maddhomei database er sathe interact korte dey. Example:
const shohojKothayPrisma = `
  const users = await prisma.user.findMany({
    where: { age: { gt: 18 } },
  });
`;
// All code examples have their own documentation.


// indexing hocce ekta technique ja database er performance improve korar jonno use hoy. Eita data retrieval ke fast kore. Example:CREATE INDEX idx_age ON users(age);

// prisma te ekta command ace..prisma generate ja amader prisma schema theke client generate kore. এই command চালালে Prisma এমন একটা client বানায়, যেটা দিয়ে ডাটাবেসে Create, Read, Update, Delete খুব সহজে করা যায়।
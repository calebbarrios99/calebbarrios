import React from "react";

const categories = [
  {
    label: "Web",
    icon: "🌐",
    skills: [
      { name: "Next.js", emoji: "▲" },
      { name: "WordPress", emoji: "🔵" },
    ],
  },
  {
    label: "Mobile",
    icon: "📱",
    skills: [
      { name: "Flutter", emoji: "💙" },
      { name: "ObjectBox", emoji: "🗄️" },
      { name: "Riverpod", emoji: "🔷" },
      { name: "Provider", emoji: "🔗" },
      { name: "GetX", emoji: "⚡" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills_title">Mis Tecnologías</h2>
      {categories.map((cat) => (
        <div className="skills_category" key={cat.label}>
          <h3 className="skills_category_label">
            <span>{cat.icon}</span> {cat.label}
          </h3>
          <div className="skills_grid">
            {cat.skills.map((skill) => (
              <div className="skills_card" key={skill.name}>
                <span className="skills_card_emoji">{skill.emoji}</span>
                <span className="skills_card_name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

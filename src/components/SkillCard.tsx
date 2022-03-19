import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: "center",
    backgroundColor: "#1f1e25",
    borderRadius: 50,
    marginBottom: 20,
    padding: 15,
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

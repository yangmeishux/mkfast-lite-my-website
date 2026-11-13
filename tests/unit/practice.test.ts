import { describe, expect, it } from 'vitest';
import {
  contentPaths,
  featuredSkills,
  getSkill,
  skillGroups,
  skills,
  skillsInGroup,
  workflow,
} from '@/content/practice';

describe('practice catalog', () => {
  it('keeps every related skill and featured skill resolvable', () => {
    expect(skills).toHaveLength(26);
    for (const skill of skills) {
      for (const related of skill.related) {
        expect(getSkill(related)?.slug).toBe(related);
      }
    }
    expect(featuredSkills()).toHaveLength(6);
    expect(getSkill(workflow.slug)).toBeUndefined();
  });

  it('covers every group and publishes both locales', () => {
    const grouped = skillGroups.flatMap((group) => skillsInGroup(group.id));
    expect(grouped).toHaveLength(skills.length);
    expect(contentPaths()).toHaveLength(60 - 2);
    expect(workflow.stages).toHaveLength(6);
    expect(workflow.modes.map((mode) => mode.id)).toEqual([
      'full',
      'lite',
      'mini',
    ]);
  });
});

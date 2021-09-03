import { Image } from './Media';

export default function TeamMember(teamMember) {
  return {
    id: teamMember.id,
    name: teamMember.name,
    qualifications: teamMember.qualifications,
    description: teamMember.description,
    about: teamMember.about,
    media: teamMember.media.map((m) => ({ ...Image(m) })),
  };
}

type OccasionFromBackend = {
  id?: number;
  event_title: string;
  event_date: string;
  occasion_id: number;
  type?: string | null;
  note: string;
};

export type OccasionForFrontend = {
  id?: number;
  eventTitle: string;
  eventDate: string;
  occasionId?: number | null;
  note: string;
};
import Occasion from "src/types/UserInfo/Occasion";
// Transform FROM backend TO frontend
export const transformOccasionFrom = (
  occasion: OccasionFromBackend,
): OccasionForFrontend => ({
  id: occasion.id,
  eventTitle: occasion.event_title,
  eventDate: occasion.event_date,
  occasionId: occasion?.occasion_id,
  note: occasion.note,
});

// Transform TO backend FROM frontend
export const transformOccasionTo = (
  occasion: Occasion,
): OccasionFromBackend => ({
  id: occasion.id,
  event_title: occasion.eventTitle,
  event_date: occasion.eventDate,
  occasion_id: occasion.occasionId || 0,
  note: occasion.note,
});


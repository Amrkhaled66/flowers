type OccasionFromBackend = {
  id?: number;
  event_title: string;
  event_date: string;
  type?: string | null;
  note: string;
};

type OccasionForFrontend = {
  id?: number;
  eventTitle: string;
  eventDate: string;
  type?: string | null;
  note: string;
};

// Transform FROM backend TO frontend
export const transformOccasionFrom = (
  occasion: OccasionFromBackend,
): OccasionForFrontend => ({
  id: occasion.id,
  eventTitle: occasion.event_title,
  eventDate: occasion.event_date,
  type: occasion?.type,
  note: occasion.note,
});

// Transform TO backend FROM frontend
export const transformOccasionTo = (
  occasion: OccasionForFrontend,
): OccasionFromBackend => ({
  id: occasion.id,
  event_title: occasion.eventTitle,
  event_date: occasion.eventDate,
  type: occasion.type,
  note: occasion.note,
});

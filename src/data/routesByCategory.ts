// Define the type for a single ATP route
export interface ATP {
  name: string;
  notes?: string; // optional extra info (e.g., "single-push variant", "winter + summer categories")
}

export interface ATPCategory {
  id: number;
  icon: string;
  title: string;
  description?: string;
  routes: ATP[];
}

export const routesByCategory: ATPCategory[] = [
  {
    id: 1,
    icon: "🏔️",
    title: "Long Trail Thru-Hike ATPs",
    routes: [
      { name: "Appalachian Trail" },
      { name: "Continental Divide Trail" },
      { name: "Pacific Crest Trail" },
      { name: "Arizona Trail" },
      { name: "Tahoe Rim Trail" },
      { name: "Colorado Trail" },
      { name: "Long Trail (Vermont)" },
      { name: "John Muir Trail" },
      { name: "Ouachita Trail" },
      { name: "Florida Trail" },
    ],
  },
  {
    id: 2,
    icon: "🏃‍♂️",
    title: "Ultra-Trail ATPs (non-thru-hike, 50–120 miles)",
    routes: [
      { name: "Wonderland Trail — Rainier" },
      { name: "Rim to Rim to Rim — Grand Canyon" },
      { name: "Timberline Trail — Hood" },
      { name: "Tahoe Rim Trail", notes: "single-push variant" },
      { name: "Zion Traverse" },
      { name: "Sandia Peak to Santa Fe transition route" },
      { name: "Telluride to Ouray route" },
      { name: "Kalalau Trail (Na Pali Coast)" },
      { name: "Loowit Trail — Mt St Helens" },
      { name: "Uinta Highline Trail" },
    ],
  },
  {
    id: 3,
    icon: "🏃",
    title: "Short-Trail Epic Route ATPs (20–50 miles)",
    routes: [
      { name: "Boulder Skyline Traverse" },
      { name: "Teton Crest Trail" },
      { name: "Joshua Tree Traverse" },
      { name: "Presidential Traverse" },
      { name: "Four Pass Loop — Aspen" },
      { name: "Enchantments Traverse — WA" },
      { name: "Rattlesnake Traverse — MT" },
      { name: "Grand Canyon North Rim to Kanab Creek" },
      { name: "Maroon Bells Traverse" },
      { name: "Sierra High Route — Segment Runs" },
    ],
  },
  {
    id: 4,
    icon: "🧗",
    title: "Alpine Traverse / Scrambling ATPs",
    routes: [
      { name: "Grand Traverse — the Tetons" },
      { name: "WURL — Wasatch" },
      { name: "LA Freeway — Front Range" },
      { name: "Evolution Traverse — Sierra" },
      { name: "Cirque Traverse — Wind Rivers" },
      { name: "Glacier Gorge Traverse — RMNP" },
      { name: "Northern Pickets Ridge Traverse — WA" },
      { name: "Stuart Range High Route — WA" },
      { name: "Lone Peak Cirque Traverse — UT" },
      { name: "Snowmass → Capitol → Clark traverse — CO" },
    ],
  },
  {
    id: 5,
    icon: "🏔️",
    title: "Mountain Range / Multi-Peak Traverses",
    routes: [
      { name: "Presidential Traverse", notes: "winter + summer categories" },
      { name: "Desolation 7-Summits — CA" },
      { name: "Tetons Cathedral Group — WY" },
      { name: "Wasatch Triple Traverse" },
      { name: "Sawtooth Range Triple Crown — ID" },
      { name: "Adirondack Great Range Traverse" },
      { name: "Wind River High Route — WY" },
      { name: "Sierra 3-Pass Linkup" },
      { name: "Sangre de Cristo Skyline Traverse — NM" },
      { name: "White Mountains Pemi Loop — NH" },
    ],
  },
  {
    id: 6,
    icon: "⛰️",
    title: "Classic Up-&-Down Single Peak ATPs",
    routes: [
      { name: "Grand Teton Up & Down" },
      { name: "Longs Peak Up & Down" },
      { name: "Half Dome cables route" },
      { name: "Mt Whitney" },
      { name: "Mt Hood South Side" },
      { name: "Mt Shasta Avalanche Gulch" },
      { name: "Mt Rainier Disappointment Cleaver" },
      { name: "Mt Olympus (Utah)" },
      { name: "Mt Sneffels (CO)" },
      { name: "Mt Washington (NH)" },
    ],
  },
  {
    id: 7,
    icon: "📍",
    title: "Peak Lists ATPs",
    routes: [
      { name: "Colorado 14ers — total time" },
      { name: "California 14ers — total time" },
      { name: "Adirondack 46 — total time" },
      { name: "New Hampshire 48 — total time" },
      { name: "Utah 13ers — total time" },
      { name: "Washington Bulgers List" },
      { name: "Montana 12ers" },
      { name: "Wyoming 13ers" },
      { name: "Idaho 12ers" },
      { name: "US 50 State High Points" },
    ],
  },
  {
    id: 8,
    icon: "🧊",
    title: "Winter/Ice Snow ATPs",
    routes: [
      { name: "Winter Presidential Traverse" },
      { name: "Winter Grand Teton" },
      { name: "Winter Longs Peak" },
      { name: "Winter Mount Washington" },
      { name: "Winter White Mountains Pemi Loop" },
      { name: "Winter Maroon Bells Traverse" },
      { name: "Winter Shasta" },
      { name: "Winter Rainier (non-glacial aid)" },
      { name: "Winter Zion Traverse" },
      { name: "Winter Four Pass Loop" },
    ],
  },
  {
    id: 9,
    icon: "🥾",
    title: "Unsupported / Pure Mode ATPs",
    description:
      "Same routes, but classified by strict style. Allows filtering by style purity.",
    routes: [
      { name: "Unsupported Grand Canyon R2R2R" },
      { name: "Unsupported JMT" },
      { name: "Unsupported Wonderland" },
      { name: "Unsupported Teton Crest" },
      { name: "Unsupported WURL" },
      { name: "Unsupported Longs Peak" },
      { name: "Unsupported Colorado 14ers" },
      { name: "Unsupported Wind River High Route" },
      { name: "Unsupported Sierra High Route" },
      { name: "Unsupported Presidential Traverse" },
    ],
  },
  {
    id: 10,
    icon: "🏊🚴‍♂️",
    title: "Multi-sport ATPs",
    routes: [
      { name: "Run + Bike Grand Teton from Jackson approach" },
      { name: "Run + Climb + Downclimb Half Dome" },
      { name: "Run + Ski Mount Washington" },
      {
        name: "Bike from Boulder → Longs Peak → run ascent/descent → bike back",
      },
      { name: "Denver to Boulder Skyline — bike + run linkup" },
      { name: "Sea-to-Summit Olympus WA (kayak + run)" },
      { name: "Desolation Traverse w/ climbing" },
      { name: "Zion Traverse + packraft variant" },
      { name: "Rainier Duathlon — run to base, summit, cycle descent variant" },
      { name: "Mount Hood — bike to Timberline + run summit" },
    ],
  },
];

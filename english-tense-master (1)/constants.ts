
import type { SectionData } from './types';

export const sections: SectionData[] = [
  {
    title: "I. Chọn đáp án đúng nhất",
    questions: [
      { id: 's0-q0', type: 'multiple-choice', prompt: "When my mother ___ home, my father ___ dinner.", options: ["came / was cooking", "came / cooks", "is coming / was cooking"], correctAnswer: "came / was cooking", explanation: "Hành động đang xảy ra (quá khứ tiếp diễn) bị hành động khác (quá khứ đơn) chen vào." },
      { id: 's0-q1', type: 'multiple-choice', prompt: "I ___ my homework before I ___ out with my friends.", options: ["will finish / go", "finish / will go", "am finishing / go"], correctAnswer: "will finish / go", explanation: "Thì tương lai đơn và hiện tại đơn trong mệnh đề thời gian." },
      { id: 's0-q2', type: 'multiple-choice', prompt: "She ___ in Hanoi since she ___ a little girl.", options: ["has lived / was", "lived / is", "lives / has been"], correctAnswer: "has lived / was", explanation: "Hiện tại hoàn thành với since và quá khứ đơn." },
      { id: 's0-q3', type: 'multiple-choice', prompt: "By the time we ___ to the cinema, the film ___.", options: ["get / will start", "got / had started", "will get / started"], correctAnswer: "got / had started", explanation: "Quá khứ hoàn thành xảy ra trước quá khứ đơn." },
      { id: 's0-q4', type: 'multiple-choice', prompt: "If he ___ hard, he ___ the exam easily.", options: ["works / will pass", "worked / passes", "will work / passed"], correctAnswer: "works / will pass", explanation: "Câu điều kiện loại 1." },
      { id: 's0-q5', type: 'multiple-choice', prompt: "While Peter ___ a book, his sister ___ a song.", options: ["was reading / sang", "read / sings", "was reading / is singing"], correctAnswer: "was reading / sang", explanation: "Hai hành động xảy ra đồng thời trong quá khứ, một cái đang tiếp diễn, một cái chỉ là hành động đơn lẻ." },
      { id: 's0-q6', type: 'multiple-choice', prompt: "As soon as it ___ raining, we ___ for the beach.", options: ["stops / will leave", "will stop / leave", "stopped / left"], correctAnswer: "stops / will leave", explanation: "Thì hiện tại đơn trong mệnh đề thời gian và tương lai đơn." },
      { id: 's0-q7', type: 'multiple-choice', prompt: "I ___ him since last Christmas.", options: ["didn't see", "haven't seen", "don't see"], correctAnswer: "haven't seen", explanation: "Hiện tại hoàn thành với since." },
      { id: 's0-q8', type: 'multiple-choice', prompt: "He suddenly ___ that he ___ her before.", options: ["realized / had met", "was realizing / met", "had realized / has met"], correctAnswer: "realized / had met", explanation: "Quá khứ hoàn thành xảy ra trước quá khứ đơn." },
      { id: 's0-q9', type: 'multiple-choice', prompt: "Mary ___ the dishes right now, so she ___ help you.", options: ["is doing / can't", "does / couldn't", "will do / doesn't"], correctAnswer: "is doing / can't", explanation: "Hiện tại tiếp diễn và hiện tại đơn." }
    ],
  },
  {
    title: "II. Chia động từ trong ngoặc",
    questions: [
      { id: 's1-q0', type: 'multiple-choice', prompt: "She ___ TV while her brother ___ games.", options: ["was watching / was playing", "watched / played", "was watching / played"], correctAnswer: "was watching / was playing", explanation: "Hai hành động đồng thời trong quá khứ." },
      { id: 's1-q1', type: 'multiple-choice', prompt: "They ___ their project yet. They ___ on it all morning.", options: ["haven't finished / have been working", "didn't finish / were working", "not finished / have worked"], correctAnswer: "haven't finished / have been working", explanation: "Hiện tại hoàn thành và Hiện tại hoàn thành tiếp diễn." },
      { id: 's1-q2', type: 'multiple-choice', prompt: "By next month, I ___ English for ten years.", options: ["will have studied", "will be studying", "will study"], correctAnswer: "will have studied", explanation: "Tương lai hoàn thành." },
      { id: 's1-q3', type: 'multiple-choice', prompt: "If he ___ careful, he ___ the vase. (Câu điều kiện loại 2)", options: ["were / wouldn't break", "was / won't break", "is / wouldn't break"], correctAnswer: "were / wouldn't break", explanation: "Câu điều kiện loại 2." },
      { id: 's1-q4', type: 'multiple-choice', prompt: "My father ___ a newspaper when the phone ___.", options: ["was reading / rang", "read / was ringing", "was reading / ringed"], correctAnswer: "was reading / rang", explanation: "Quá khứ tiếp diễn và quá khứ đơn." },
      { id: 's1-q5', type: 'multiple-choice', prompt: "She ___ in London for two years before she ___ to Paris.", options: ["had lived / moved", "lived / had moved", "was living / moved"], correctAnswer: "had lived / moved", explanation: "Quá khứ hoàn thành xảy ra trước quá khứ đơn." },
      { id: 's1-q6', type: 'multiple-choice', prompt: "We ___ to the zoo after we ___ lunch.", options: ["went / had had", "had gone / had", "went / had"], correctAnswer: "went / had had", explanation: "Quá khứ đơn và quá khứ hoàn thành." },
      { id: 's1-q7', type: 'multiple-choice', prompt: "When I ___ at the party, everyone already ___.", options: ["arrived / had already left", "had arrived / left", "arrived / already left"], correctAnswer: "arrived / had already left", explanation: "Quá khứ đơn và quá khứ hoàn thành." },
      { id: 's1-q8', type: 'multiple-choice', prompt: "As soon as he ___ enough money, he ___ a new laptop.", options: ["saves / will buy", "will save / buys", "saved / would buy"], correctAnswer: "saves / will buy", explanation: "Hiện tại đơn và tương lai đơn trong mệnh đề thời gian." },
      { id: 's1-q9', type: 'multiple-choice', prompt: "I ___ sure I ___ him somewhere before.", options: ["am / have met", "was / had met", "am / met"], correctAnswer: "am / have met", explanation: "Hiện tại đơn và hiện tại hoàn thành." }
    ],
  },
  {
    title: "III. Hoàn thành câu",
    questions: [
      { id: 's2-q0', type: 'multiple-choice', prompt: "I ___ my homework when my best friend ___ me.", options: ["was doing / called", "did / was calling", "was doing / call"], correctAnswer: "was doing / called", explanation: "Quá khứ tiếp diễn và quá khứ đơn." },
      { id: 's2-q1', type: 'multiple-choice', prompt: "The house ___ dirty because they ___ it for a long time.", options: ["looked / hadn't cleaned", "looks / don't clean", "was looking / didn't clean"], correctAnswer: "looked / hadn't cleaned", explanation: "Quá khứ đơn/hiện tại đơn và quá khứ hoàn thành/hiện tại hoàn thành." },
      { id: 's2-q2', type: 'multiple-choice', prompt: "If she ___ harder, she ___ better grades. (Câu điều kiện loại 1)", options: ["studies / will get", "will study / gets", "studied / would get"], correctAnswer: "studies / will get", explanation: "Câu điều kiện loại 1." },
      { id: 's2-q3', type: 'multiple-choice', prompt: "We ___ until the rain ___.", options: ["will wait / stops", "wait / will stop", "are waiting / will stop"], correctAnswer: "will wait / stops", explanation: "Tương lai đơn và hiện tại đơn." },
      { id: 's2-q4', type: 'multiple-choice', prompt: "He ___ his grandparents since he ___ to the city.", options: ["hasn't visited / moved", "didn't visit / has moved", "doesn't visit / moved"], correctAnswer: "hasn't visited / moved", explanation: "Hiện tại hoàn thành và quá khứ đơn." },
      { id: 's2-q5', type: 'multiple-choice', prompt: "Before she ___ to music, she ___ all her chores.", options: ["listened / had finished", "had listened / finished", "was listening / finished"], correctAnswer: "listened / had finished", explanation: "Quá khứ đơn và quá khứ hoàn thành." },
      { id: 's2-q6', type: 'multiple-choice', prompt: "When they ___ him, he ___ English at a local school.", options: ["met / was teaching", "were meeting / taught", "met / taught"], correctAnswer: "met / was teaching", explanation: "Quá khứ đơn và quá khứ tiếp diễn." },
      { id: 's2-q7', type: 'multiple-choice', prompt: "Hurry up! The train ___ in five minutes.", options: ["is leaving", "leaves", "will leave"], correctAnswer: "is leaving", explanation: "Hiện tại tiếp diễn cho tương lai gần có kế hoạch." },
      { id: 's2-q8', type: 'multiple-choice', prompt: "She ___ to the concert unless her parents ___ her.", options: ["won't go / allow", "doesn't go / will allow", "isn't go / allow"], correctAnswer: "won't go / allow", explanation: "Tương lai đơn và hiện tại đơn." },
      { id: 's2-q9', type: 'multiple-choice', prompt: "By the end of this year, my brother ___ from university.", options: ["will have graduated", "will be graduating", "graduates"], correctAnswer: "will have graduated", explanation: "Tương lai hoàn thành." }
    ]
  },
  {
    title: "IV. Nối hai vế câu",
    questions: [
      { id: 's3-q0', type: 'multiple-choice', prompt: "Choose the correct combined sentence for: I (read) a book. (while) My sister (listen) to music.", options: ["I was reading a book while my sister was listening to music.", "I read a book while my sister listened to music.", "I was reading a book while my sister listened to music."], correctAnswer: "I was reading a book while my sister was listening to music.", explanation: "Hai hành động đồng thời trong quá khứ." },
      { id: 's3-q1', type: 'multiple-choice', prompt: "Choose the correct combined sentence for: He (buy) a new car. (as soon as) He (get) his salary.", options: ["He will buy a new car as soon as he gets his salary.", "He buys a new car as soon as he will get his salary.", "He will buy a new car as soon as he got his salary."], correctAnswer: "He will buy a new car as soon as he gets his salary.", explanation: "" },
      { id: 's3-q2', type: 'multiple-choice', prompt: "Choose the correct combined sentence for: She (not eat) anything. (since) This morning.", options: ["She hasn't eaten anything since this morning.", "She didn't eat anything since this morning.", "She don't eat anything since this morning."], correctAnswer: "She hasn't eaten anything since this morning.", explanation: "" },
      { id: 's3-q3', type: 'multiple-choice', prompt: "Choose the correct combined sentence for: We (finish) dinner. (before) The guests (arrive).", options: ["We had finished dinner before the guests arrived.", "We finished dinner before the guests had arrived.", "We had finished dinner before the guests had arrived."], correctAnswer: "We had finished dinner before the guests arrived.", explanation: "" },
      { id: 's3-q4', type: 'multiple-choice', prompt: "Choose the correct combined sentence for: The teacher (get) angry. (if) Students (not do) their homework.", options: ["The teacher gets angry if students don't do their homework.", "The teacher will get angry if students don't do their homework.", "The teacher gets angry if students didn't do their homework."], correctAnswer: "The teacher gets angry if students don't do their homework.", explanation: "" }
    ]
  },
  {
    title: "V. Tổng hợp và nâng cao",
    questions: [
      { id: 's4-q0', type: 'multiple-choice', prompt: "After she ___ the email, she ___ off the computer.", options: ["had sent / turned", "sent / had turned", "had sent / had turned"], correctAnswer: "had sent / turned", explanation: "Quá khứ hoàn thành và quá khứ đơn." },
      { id: 's4-q1', type: 'multiple-choice', prompt: "I ___ happy if you ___ to my party next week.", options: ["will be / come", "am / will come", "would be / came"], correctAnswer: "will be / come", explanation: "Câu điều kiện loại 1." },
      { id: 's4-q2', type: 'multiple-choice', prompt: "Look! The sun ___! It ___ a beautiful day.", options: ["is rising / is", "rises / will be", "is rising / will be"], correctAnswer: "is rising / is", explanation: "Hiện tại tiếp diễn và hiện tại đơn/tương lai đơn." },
      { id: 's4-q3', type: 'multiple-choice', prompt: "They ___ in the park when it suddenly ___ to rain heavily.", options: ["were walking / started", "walked / was starting", "were walking / was starting"], correctAnswer: "were walking / started", explanation: "Quá khứ tiếp diễn và quá khứ đơn." },
      { id: 's4-q4', type: 'multiple-choice', prompt: "He ___ that he ___ his wallet at home.", options: ["realized / had left", "had realized / left", "was realizing / left"], correctAnswer: "realized / had left", explanation: "Quá khứ đơn và quá khứ hoàn thành." },
      { id: 's4-q5', type: 'multiple-choice', prompt: "When I ___ young, I often ___ fishing with my uncle.", options: ["was / went", "was / used to going", "were / went"], correctAnswer: "was / went", explanation: "Thói quen trong quá khứ." },
      { id: 's4-q6', type: 'multiple-choice', prompt: "This time tomorrow, we ___ to New York.", options: ["will be flying", "will fly", "are flying"], correctAnswer: "will be flying", explanation: "Tương lai tiếp diễn." },
      { id: 's4-q7', type: 'multiple-choice', prompt: "My parents ___ for 25 years by their anniversary next month.", options: ["will have been married", "will be married", "will marry"], correctAnswer: "will have been married", explanation: "Tương lai hoàn thành." },
      { id: 's4-q8', type: 'multiple-choice', prompt: "If I ___ you, I ___ him any money.", options: ["were / wouldn't lend", "was / won't lend", "am / wouldn't lend"], correctAnswer: "were / wouldn't lend", explanation: "Câu điều kiện loại 2." },
      { id: 's4-q9', type: 'multiple-choice', prompt: "She ___ the floor and now it ___ fresh.", options: ["has cleaned / smells", "cleaned / is smelling", "has cleaned / is smelling"], correctAnswer: "has cleaned / smells", explanation: "Hiện tại hoàn thành và hiện tại đơn." },
      { id: 's4-q10', type: 'multiple-choice', prompt: "The children ___ soundly when the earthquake ___.", options: ["were sleeping / occurred", "slept / was occurring", "were sleeping / was occurring"], correctAnswer: "were sleeping / occurred", explanation: "Quá khứ tiếp diễn và quá khứ đơn." },
      { id: 's4-q11', type: 'multiple-choice', prompt: "I ___ Da Nang since 2018, but I ___ to go there next summer.", options: ["haven't visited / am planning", "didn't visit / plan", "haven't visited / will plan"], correctAnswer: "haven't visited / am planning", explanation: "Hiện tại hoàn thành và hiện tại tiếp diễn." },
      { id: 's4-q12', type: 'multiple-choice', prompt: "What ___ when I ___ you yesterday?", options: ["were you doing / called", "did you do / was calling", "were you doing / was calling"], correctAnswer: "were you doing / called", explanation: "Quá khứ tiếp diễn và quá khứ đơn." },
      { id: 's4-q13', type: 'multiple-choice', prompt: "Before the 1990s, almost no one ___ a mobile phone.", options: ["used", "had used", "was using"], correctAnswer: "used", explanation: "Quá khứ đơn hoặc quá khứ hoàn thành." },
      { id: 's4-q14', type: 'multiple-choice', prompt: "We ___ the film only after we ___ the book.", options: ["watched / had read", "had watched / read", "were watching / had read"], correctAnswer: "watched / had read", explanation: "Quá khứ đơn và quá khứ hoàn thành." }
    ]
  },
];
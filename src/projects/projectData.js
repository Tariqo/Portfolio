import projectOne from "../assets/Project1.JPG";
import projectTwo from "../assets/visualizer.png";
import projectThree from "../assets/Main Menu.png";

const projects = {
    1: {
    title: "Object detecion and classification model",
    image: projectOne,
    description: (
        <>
        <p>
        A custom object detection model and a comparison between its performance with an existing object detection model 
        (YOLO). For that, I generated a synthetic dataset to train my own custom model and fine-tuned an existing one.
        </p>
        </>
    ),
    github: "https://colab.research.google.com/drive/1MCadn8o3FbpPa9vCSf2eaAchujqXYt-2#scrollTo=z36LynZci_I6",
    },
  2: {
    title: "Algorithm Visualizer",
    image: projectTwo,
    description: (
      <>
        <p>
          An algorithm visualizer made in the functional programming paradigm, specifically in Clean.  
        </p>
      </>
    ),
    github: "https://github.com/Tariqo/AlgorithmVisualizer",
  },

  3: {
    title: "Reinforcement learning chess engine",
    image: projectThree,
    description: (
      <>
        <p>
        The goal of this project was to investigate the effectiveness of reinforcement learning, specifically the Q-learning algorithm,
        within the context of chess. I designed and implemented a custom chess environment and implemented an engine reinforcement learning algorithm for it.
        </p>
      </>
    ),
    github: "https://github.com/Tariqo/Chess-Engine_Reinforcement-Learning"
  },
};

export default projects;
import { animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

export const routeAnimation: AnimationEntryMetadata = [

    trigger('routing',[
        state('*',style({transform: 'translateX(0)'})),
        transition('void => back',[
            style({transform: 'translateX(-100%'}),
            animate('800ms')
        ]),
        // note: It is the :leave transition that seems to add the 
        transition('back => void',[
            animate('800ms',style({
                transform:'translateX(100%)'
            }))
        ]),
        transition('void => forward',[
            style({transform: 'translateX(100%'}),
            animate('800ms')
        ]),
        // note: It is the :leave transition that seems to add the 
        transition('forward => void',[
            animate('800ms',style({
                transform:'translateX(-100%)'
            }))
        ])
    ])

]
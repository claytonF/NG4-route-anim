import { animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

export const routeAnimation: AnimationEntryMetadata = [

    trigger('routing',[
        state('*',style({transform: 'translateX(0)'})),
        transition('void => back',[
            style({transform: 'translateX(-100%'}),
            animate('200ms')
        ]),
        transition('back => void',[
            animate('200ms',style({
                transform:'translateX(100%)'
            }))
        ]),
        transition('void => forward',[
            style({transform: 'translateX(100%'}),
            animate('200ms')
        ]),
        transition('forward => void',[
            animate('200ms',style({
                transform:'translateX(-100%)'
            }))
        ])
    ])

]